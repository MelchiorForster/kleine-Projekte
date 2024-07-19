

const Subscribe = document.getElementById("myCheckBox");
const Mastercard = document.getElementById("myMasterCard");
const Visa = document.getElementById("myVisa");
const PayPal = document.getElementById("myPayPal");
const Submit = document.getElementById("mySubmit");

let Para1 = document.getElementById("myp1")
let Para2 = document.getElementById("myp2")


Submit.onclick = function(){

if(Subscribe.checked){
Para2.textContent= "You are a subscriber"
}

if(Visa.checked){
Para1.textContent="You are paying via Visa"
}
else if(Mastercard.checked){
Para1.textContent="You are paying via MasterCard"
}
else if(PayPal.checked){
    Para1.textContent= "You are paying via Paypal"
}
else {
    Para1.textContent= "You have to choose an payment method"
}
}