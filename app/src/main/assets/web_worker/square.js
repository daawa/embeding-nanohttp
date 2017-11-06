var squareNumber = document.querySelector('#number3');

var result2 = document.querySelector('.result2');

//if (!!window.SharedWorker) {
if (!!window.Worker) {
  var myWorker = new Worker("worker.js");

  squareNumber.onchange = function() {
    //myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
    myWorker.postMessage([squareNumber.value, squareNumber.value]);
    console.log('Message posted to worker');
  }

  //myWorker.port.onmessage = function(e) {
  myWorker.onmessage = function(e) {
    result2.textContent = e.data;
    console.log('Message received from worker');
  }
}