//onconnect = function(e) {
  //var port = e.ports[0];


  importScripts('sleep.js');
  var sleep = pause();
  // test the async
  onmessage = function(e) {

    sleep(2000).then( function(){
        var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
        console.log('Posting message back to main script');
        postMessage(workerResult);
    })

  }

//}
