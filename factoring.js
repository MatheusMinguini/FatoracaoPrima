var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
 return seconds = Math.round(timeDiff);
}


function factorize(number) {
    let parts = [];

    while (number > 1) {
        for (let i = 2; i <= number; i++) {
            if (number % i) continue;
            parts.push([number, i]);
            number = number / i;
            break;
        }
    }
    return parts;
}

function factorInPrimes(number){
  const input = document.getElementById("number_to_be_factored");

  start();
  const result = factorize(input.value);
  const timeTaken = end();

  let resultMessage = '';

  for(let i = 0; i < result.length; i++){
    if((result.length) - i != 1 ){
      resultMessage += result[i][1].toString().concat(" * ");
    }else{
      resultMessage += result[i][1].toString();
    }
  }

  writeFactoringResultIntoScreen(resultMessage, timeTaken);
}


function writeFactoringResultIntoScreen(message, time){
  const resultText = document.getElementById("resultFactoringText");
  const timeText = document.getElementById("timeFactoringText");

  resultText.innerHTML = message;
  timeText.innerHTML = time;
}
