const temperature = document.getElementById("textBox");
const toFahrenheit = document.getElementById("converter1");
const toCelsius = document.getElementById("converter2");
const paragraph = document.getElementById("result");
const button = document.getElementById("mySubmit");

let temp;

button.onclick = function convert(event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite
  if (toFahrenheit.checked) {
    temp = Number(temperature.value);
    temp = (temp * 9) / 5 + 32;
    paragraph.textContent = temp.toFixed(2) + "° Fahrenheit";
  } else if (toCelsius.checked) {
    temp = Number(temperature.value);
    temp = ((temp - 32) * 5) / 9;
    paragraph.textContent = temp.toFixed(2) + "° Celsius";
  } else {
    paragraph.textContent = "You need to select a unit";
  }
};
