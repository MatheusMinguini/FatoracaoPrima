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

async function multiply(value1, value2){
	start();

	let result = [];

	const product = await value1 * value2;

	const timeTaken = end();

	result.push(product);
	result.push(timeTaken);

	return result;
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


function multiplyTwoIntegers(){
	displayMessageWhileProcessingMultiplication();

	//TODO: Validar se os dois numeros sao inteiros

    const first_number_to_be_multiplied = document.getElementById("first_number_to_be_multiplied");
    const second_number_to_be_multiplied = document.getElementById("second_number_to_be_multiplied");

    multiply(first_number_to_be_multiplied.value, second_number_to_be_multiplied.value).then((result) => {
    	writeMultiplicationResultIntoScreen(result);
    	DOM_objects.gif.style.display = "none";
    }).catch((error) => {
	    console.log(error);
	    alert("Houve um erro ao multiplicar os números. Por favor, tente mais tarde!");
	});
}

function factorInPrimes(){
   	displayMessageWhileProcessingFactorization();

	factorInPrimesCalculate().then((result) => {
	    writeFactoringResultIntoScreen(result);
	    DOM_objects.gif.style.display = "none";
	}).catch((error) => {
	    console.log(error);
	    alert("Houve um erro ao multiplicar os números. Por favor, tente mais tarde!");
	});
}

function writeFactoringResultIntoScreen(result){
  DOM_objects.factoring.resultText.style.color = '#007b5e';
  DOM_objects.factoring.timeText.style.color = '#007b5e';

  DOM_objects.factoring.resultText.innerHTML = result[0];
  DOM_objects.factoring.timeText.innerHTML = `${result[1]} segundos.`;
}

function writeMultiplicationResultIntoScreen(result){
  DOM_objects.multiplication.resultText.style.color = '#007b5e';
  DOM_objects.multiplication.timeText.style.color = '#007b5e';

  DOM_objects.multiplication.resultText.innerHTML = result[0];
  DOM_objects.multiplication.timeText.innerHTML = `${result[1]} segundos.`;
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
    },

    gif : document.querySelector(".loadingImg")
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

function displayMessageWhileProcessingFactorization(){
  const message = "Fatorando... ";

  DOM_objects.factoring.resultText.style.color = '#f16165ff';
  DOM_objects.factoring.timeText.style.color = '#f16165ff';

  DOM_objects.factoring.resultText.innerHTML = message;
  DOM_objects.factoring.timeText.innerHTML = message;

  DOM_objects.gif.style.display = "block";
}


function displayMessageWhileProcessingMultiplication(){
  const message = "Multiplicando... ";

  DOM_objects.multiplication.resultText.style.color = '#f16165ff';
  DOM_objects.multiplication.timeText.style.color = '#f16165ff';

  DOM_objects.multiplication.resultText.innerHTML = message;
  DOM_objects.multiplication.timeText.innerHTML = message;

  DOM_objects.gif.style.display = "block";
}
