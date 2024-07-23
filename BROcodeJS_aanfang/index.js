let aalter;
let vname;

document.getElementById("b1").onclick = function () {
  vname = document.getElementById("Username").value;
  document.getElementById("output").textContent = "Hallo " + vname + "!";
};

document.getElementById("b2").onclick = function () {
  vname = document.getElementById("Username").value;
  document.getElementById("output").textContent =
    "schön dich zu sehen!" + " " + vname;
};
document.getElementById("b3").onclick = function () {
  vname = document.getElementById("Username").value;
  document.getElementById("output").textContent =
    "Was ist das denn für ein komischer Name?" + " " + vname;
};

document.getElementById("mySubmit").onclick = function () {
  vname = document.getElementById("Username").value;
  aalter = document.getElementById("Alterseingabe").value;
  document.getElementById("output2").textContent =
    "Hallo " + vname + ", " + "du bist also" + " " + aalter + " Jahre alt!";
  aalter = Number(aalter);
  aalter2 = aalter + 5;
  console.log(aalter2);
  document.getElementById("output3").textContent =
    "Lüg nicht, eigentlich bist du doch " + aalter2 + " Jahre alt!";
};

let day = new Date().getDay();

switch (day) {
  case 0:
    document.getElementById("output4").textContent = "Es ist Sonntag";
    break;
  case 1:
    document.getElementById("output4").textContent = "Es ist Montag";
    break;
  case 2:
    document.getElementById("output4").textContent = "Es ist Dienstag";
    break;
  case 3:
    document.getElementById("output4").textContent = "Es ist Mittwoch";
    break;
  case 4:
    document.getElementById("output4").textContent = "Es ist Donnerstag";
    break;
  case 5:
    document.getElementById("output4").textContent = "Es ist Freitag";
    break;
  case 6:
    document.getElementById("output4").textContent = "Es ist Samstag";
    break;
  default:
    document.getElementById("output4").textContent = "Fehler";
    break;
}

const Rot = document.getElementById("red");
const Grün = document.getElementById("green");
const Blau = document.getElementById("blue");
const Bu5 = document.getElementById("B5");
const output5 = document.getElementById("output5");

Bu5.onclick = function () {
  event.preventDefault();
  if (Rot.checked) {
    output5.textContent = "Rot ist deine Lieblingsfarbe!";
  } else if (Grün.checked) {
    output5.textContent = "Grün ist deine Lieblingsfarbe!";
  } else if (Blau.checked) {
    output5.textContent = "Blau ist deine Lieblingsfarbe!";
  }
};

let cars = ["BMW", "Audi", "Mercedes", "VW", "Opel"];

cars.pop();
cars.push("Ford");
cars.shift();
cars.unshift("Fiat");
cars.forEach(function (index, item) {
  console.log(index, item);
});

function myFunction(index, item, element) {
  element[index] = item + "!";

  return element;
}
