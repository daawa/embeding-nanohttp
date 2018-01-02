# embeding-nanohttp
 using NanoHttp to host frontend  sources within Android app 

<br/><br/>

This repo is cloned from [nanohttp](https://github.com/NanoHttpd/nanohttpd). 

The build chain has been migrated from mvn to gradle.

<br/>

process:

`NanoHTTPD` - - -> `ServerRunnable` - - -> `ClientHandler` - - -> `HttpSession` - - -> `IHandler<IHTTPSession, Response>`

<br/>

## why 

1. if we load a html from file, the Javascript code can't use **Web Worker** cause of the same-origin policy (in this case , the origin is null)， 

2. and ajax request would be blocked cause of **CORS** .


<br/>

## RequestProxy 的规则

### 1. api 数据请求

`RequestProxy` 的最初目的是解决 web view 的 `CORS` 问题 ， web view 发送api请求的host 是 `localhost` ，
nano server 收到后将其转发给真正的api server， 比如 `http://localhsot/api/trial`,
nano 将发送请求 `https://real-server/api/trial`, 并将数据转回web view。

目前的规则是，只要不是**静态资源**请求，该请求就会被转发到远程api服务器，因此会出现下面的问题:

### 2. nano 无法处理的文件请求

对于有后缀的静态文件请求， 比如 `/some/path/xxx.js?query` , 如果本地有就处理，
如果本地无法找到，应该将请求转发到 ***约定的远程静态文件服务器***，比如 cdn ;

这么做的原因是因为， 类似 `https://remote-server/api/trial/[id]` 这种请求，返回的可能是纯数据，

也可能是另一个页面(尚未迁移到nano app的服务端渲染页面， 原始的服务端可能是由多个单页面应用(spa)组成的），

如果是一个尚未本地化的页面的话，那么它依赖的js等静态资源也**非常可能不在本地**。

### 3. nano 路由规则的必要性

假设我们app本地有两个单页应用（spa），

- 一个列表页spa， 
- 一个详情页spa，

列表的入口是 `http://localhost/app1/index.html` ,

详情的入口是 `http://localhost/app2/index.html?some_id`,

这个列表的单个项会 **链接** 到具体的详情页，打包时链接为 `http://localhost/path_to_app2/app2/some_id`

在服务端，`http://remote-host/path_2_app2/app2/some_id` 返回的是渲染好的详情页，

但是在我们的nano app中， 它应该重定向到 `http://localhost/app2/index.html?some_id`, 因为详情页spa 在我们nano app中是存在的.

**为解决这个问题，需要梳理出服务端所有的单页spa， 然后在nano 建立相应的 router 规则**

<br/>

### 4. todo: 扫描工具 - - - 找到单页应用的所有出口

在单页应用内，跳转是通过使用事件绑定实现的（比如 `vue-router` 的做法）， 而带有 href 值的 普通 `<a>` 标签一般跳往单页应用外部的。

可以根据这一规则，扫描出所有的出口

