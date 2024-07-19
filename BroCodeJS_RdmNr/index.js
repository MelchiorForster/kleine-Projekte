

const Random1 = document.getElementById("rdm1");
const Random2 = document.getElementById("rdm2");
const Random3 = document.getElementById("rdm3");
const Dice = document.getElementById("dice");

let randomNumber1;
let randomNumber2;
let randomNumber3;

const min = 1;
const max = 6;


Dice.onclick = function(){
randomNumber1 = Math.floor(Math.random()*max)+ min;
Random1.textContent = randomNumber1
randomNumber2 = Math.floor(Math.random()*max)+ min;
Random2.textContent = randomNumber2
randomNumber3 = Math.floor(Math.random()*max)+ min;
Random3.textContent = randomNumber3

}
