//console.log("Whats up motherfucker");
//console.log("You sick bastard");

const PI=3.14159;
    let radius;
    let umfang;

document.getElementById("mySubmit").onclick = function(){
radius = document.getElementById("eing. Radius").value;
radius=Number(radius);
umfang = 2* PI * radius;
//console.log(umfang);
document.getElementById("myh3").textContent = umfang + " cm";
}



