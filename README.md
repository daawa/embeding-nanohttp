# embeding-nanohttp
 using NanoHttp to host frontend  sources within Android app 

<br/><br/>

This repo is cloned from [nanohttp](https://github.com/NanoHttpd/nanohttpd). 

The build chain has been migrated from mvn to gradle.

## why 

- if we load a html from file, the Javascript code can't use Web Worker cause of the same-origin policy (in this case , the origin is null)

