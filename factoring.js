//Global objects
let startTime, endTime;
let DOM_objects;

window.onload = loadPage;

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

async function factorInPrimesCalculate(){
  const input = document.getElementById("number_to_be_factored");

  start();
  const factors = await factorize(input.value);
  const timeTaken = end();

  let resultMessage = '';

  for(let i = 0; i < factors.length; i++){
    if((factors.length) - i != 1 ){
      resultMessage += factors[i][1].toString().concat(" * ");
    }else{
      resultMessage += factors[i][1].toString();
    }
  }

  let result = [];
  result.push(resultMessage);
  result.push(timeTaken);
  return result;
}

function factorInPrimes(){
  displayMessageWhileProcessingFactorization();

  factorInPrimesCalculate().then((result) => {
      writeFactoringResultIntoScreen(result)
  }).catch((error) => {
      console.log(error);
  });
}

function displayMessageWhileProcessingFactorization(){
  const message = "Fatorando... ";

  DOM_objects.factoring.resultText.style.color = '#f16165ff';
  DOM_objects.factoring.resultText.style.color = '#f16165ff';

  DOM_objects.factoring.resultText.innerHTML = message;
  DOM_objects.factoring.timeText.innerHTML = message;
}

function writeFactoringResultIntoScreen(result){
  DOM_objects.factoring.resultText.style.color = '#007b5e';
  DOM_objects.factoring.timeText.style.color = '#007b5e';

  DOM_objects.factoring.resultText.innerHTML = result[0];
  DOM_objects.factoring.timeText.innerHTML = `${result[1]} segundos.`;
}

function loadPage(){
  DOM_objects = {
    factoring : {
      resultText : document.getElementById("resultFactoringText"),
      timeText : document.getElementById("timeFactoringText")
    },

    multiplication : {
      resultText : document.getElementById("resultMultiplicationText"),
      timeText : document.getElementById("timeMultiplicationText")
    }
  }
}

function start() {
  startTime = new Date();
}

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds
 return seconds = Math.round(timeDiff);
}
