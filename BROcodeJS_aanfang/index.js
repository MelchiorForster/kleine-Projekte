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
