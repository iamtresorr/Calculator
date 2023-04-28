"use strict";

//getting all field vairables
const number1Field = document.getElementById("number1Field");
const number2Field = document.getElementById("number2Field");
const answerField = document.getElementById("answerField");

//getting all button variables
const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const divideBtn = document.getElementById("divideBtn");


window.onload = init;


function init(){

addBtn.onclick = onAddBtnClicked;
subtractBtn.onclick = onSubtractBtnClicked;
multiplyBtn.onclick = onMultiplyBtnClicked;
divideBtn.onclick = onDivisionBtnClicked;

};


function onAddBtnClicked(){
    let sum = Number(number1Field.value) + Number(number2Field.value);
    answerField.value = sum;
}

function onSubtractBtnClicked(){
    let difference = Number(number1Field.value) - Number(number2Field.value);
    answerField.value = difference;
}


function onMultiplyBtnClicked(){
    let product = Number(number1Field.value) * Number(number2Field.value);
    answerField.value = product;
}

function onDivisionBtnClicked(){
    let quotient = Number(number1Field.value) / Number(number2Field.value);
    answerField.value = quotient;
}