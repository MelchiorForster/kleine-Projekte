age = document.getElementById("alter").value;

document.getElementById("b1").onclick = function () {
  age = document.getElementById("alter").value;
  if (age < 18) {
    document.getElementById("output").textContent = "grow up, kiddo!!";
  } else {
    document.getElementById("output").textContent = "Welcome to our page!";
  }
};
// ternary operator
//document.getElementById("b1").onclick = function(){
//  age = document.getElementById("alter").value;
//   document.getElementById("output").textContent = age < 18 ? "werd erstmal erwachsen!" : "Welcome to our page!";
// }
