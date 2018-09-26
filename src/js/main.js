const pressClear = () => {

  calculator.answer.value = '';
}
const pressDiv = () =>{
  calculator.answer.value += '/';
}

const pressSeven = () => {
  calculator.answer.value += '7';
}

const pressEight = () => {
  calculator.answer.value += '8';
}

const pressNine = () => {
  calculator.answer.value += '9';
}

const pressMult = () => {
  calculator.answer.value += '*';
}

const pressFour = () => {
  calculator.answer.value += '4';
}

const pressFive = () => {
  calculator.answer.value += '5';
}

const pressSix = () => {
  calculator.answer.value += '6';
}

const pressSub = () => {
  calculator.answer.value += '-';
}

const pressOne = () => {
  calculator.answer.value += '1';
}

const pressTwo = () => {
  calculator.answer.value += '2';
}

const pressThree = () => {
  calculator.answer.value += '3';
}

const pressAdd = () => {
  calculator.answer.value += '+';
}

const pressZero = () => {
  calculator.answer.value += '0';
}

const pressDecimal = () => {
  calculator.answer.value += '.';
}


const calculate = () => {

  calculator.answer.value=eval(calculator.answer.value);
}


const keypress = (event) => {
  if (event.keyCode == 49){
    pressOne();
  }
  else if (event.keyCode == 50){
    pressTwo();
  }
  else if (event.keyCode == 51){
    pressThree();
  }
  else if (event.keyCode == 52){
    pressFour();
  }
  else if (event.keyCode == 53){
    pressFive();
  }
  else if (event.keyCode == 54){
    pressSix();
  }
  else if (event.keycode == 55){
    pressSeven();
  }
  else if (event.keyCode == 56){
    pressEight();
  }
  else if (event.keyCode == 57){
    pressNine();
  }
  else if (event.keyCode == 48){
    pressZero();
  }
  else if (event.keyCode == 45){
    pressSub();
  }
  else if (event.keyCode == 43){
    pressAdd();
  }
  else if (event.keyCode == 42){
    pressMult();
  }
  else if (event.keyCode == 47){
    pressDiv();
  }
  else if (event.keyCode == 46){
    pressDecimal();
  }
  else if (event.keyCode == 13){
    event.preventDefault();
    calculate();
  }

}

document.addEventListener("keypress", keypress);

const deleteNumber = (event) => {
  if (event.keyCode == 8){
    calculator.answer.value = (calculator.answer.value.slice(0,-1));
  }
}

document.addEventListener("keyup", deleteNumber);
