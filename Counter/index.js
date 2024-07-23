let count = 0;

const incButton = document.getElementById("incBtn");
const decButton = document.getElementById("decBtn");
const resButton = document.getElementById("rstBtn");
const inc2Button = document.getElementById("incBtn2");
const dec2Button = document.getElementById("decBtn2");
const counter = document.getElementById("countLabel");

incButton.onclick = function () {
  count++;
  counter.textContent = count;
};

decButton.onclick = function () {
  count++;
  counter.textContent = count;
};

resButton.onclick = function () {
  count = 0;
  counter.textContent = count;
};

inc2Button.onclick = function () {
  count = count + 2;
  counter.textContent = count;
};
dec2Button.onclick = function () {
  count = count - 2;
  counter.textContent = count;
};
