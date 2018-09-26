"use strict";

var pressClear = function pressClear() {
  calculator.answer.value = '';
};

var pressDiv = function pressDiv() {
  calculator.answer.value += '/';
};

var pressSeven = function pressSeven() {
  calculator.answer.value += '7';
};

var pressEight = function pressEight() {
  calculator.answer.value += '8';
};

var pressNine = function pressNine() {
  calculator.answer.value += '9';
};

var pressMult = function pressMult() {
  calculator.answer.value += '*';
};

var pressFour = function pressFour() {
  calculator.answer.value += '4';
};

var pressFive = function pressFive() {
  calculator.answer.value += '5';
};

var pressSix = function pressSix() {
  calculator.answer.value += '6';
};

var pressSub = function pressSub() {
  calculator.answer.value += '-';
};

var pressOne = function pressOne() {
  calculator.answer.value += '1';
};

var pressTwo = function pressTwo() {
  calculator.answer.value += '2';
};

var pressThree = function pressThree() {
  calculator.answer.value += '3';
};

var pressAdd = function pressAdd() {
  calculator.answer.value += '+';
};

var pressZero = function pressZero() {
  calculator.answer.value += '0';
};

var pressDecimal = function pressDecimal() {
  calculator.answer.value += '.';
};

var calculate = function calculate() {
  calculator.answer.value = eval(calculator.answer.value);
};

var keypress = function keypress(event) {
  if (event.keyCode == 49) {
    pressOne();
  } else if (event.keyCode == 50) {
    pressTwo();
  } else if (event.keyCode == 51) {
    pressThree();
  } else if (event.keyCode == 52) {
    pressFour();
  } else if (event.keyCode == 53) {
    pressFive();
  } else if (event.keyCode == 54) {
    pressSix();
  } else if (event.keycode == 55) {
    pressSeven();
  } else if (event.keyCode == 56) {
    pressEight();
  } else if (event.keyCode == 57) {
    pressNine();
  } else if (event.keyCode == 48) {
    pressZero();
  } else if (event.keyCode == 45) {
    pressSub();
  } else if (event.keyCode == 43) {
    pressAdd();
  } else if (event.keyCode == 42) {
    pressMult();
  } else if (event.keyCode == 47) {
    pressDiv();
  } else if (event.keyCode == 46) {
    pressDecimal();
  } else if (event.keyCode == 13) {
    event.preventDefault();
    calculate();
  }
};

document.addEventListener("keypress", keypress);

var deleteNumber = function deleteNumber(event) {
  if (event.keyCode == 8) {
    calculator.answer.value = calculator.answer.value.slice(0, -1);
  }
};

document.addEventListener("keyup", deleteNumber);