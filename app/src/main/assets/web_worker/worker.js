//onconnect = function(e) {
  //var port = e.ports[0];

  onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);
    console.log('Posting message back to main script');
    postMessage(workerResult);
  }

//}
