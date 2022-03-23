
//Variables

let inputConvert = document.querySelector(".unit-converter")
let convertBtn = document.getElementById("convert-btn")
let feetEl = document.getElementById("feet-el")
let meterEl = document.getElementById("meter-el")
let gallonEl = document.getElementById("gallon-el")
let literEl = document.getElementById("liter-el")
let poundEl = document.getElementById("pound-el")
let kiloEl = document.getElementById("kilo-el")


convertBtn.addEventListener("click", showConversion);


function showConversion() {
    feetEl.innerText = inputConvert.value; 
    feetEl.innerText = (inputConvert.value * 3.28084).toFixed(0);
    meterEl.innerText = inputConvert.value; 
    meterEl.innerText = (inputConvert.value * 0.3048).toFixed(3);
    gallonEl.innerText = inputConvert.value; 
    gallonEl.innerText = (inputConvert.value * 0.264172).toFixed(0);
    literEl.innerText = inputConvert.value; 
    literEl.innerText = (inputConvert.value * 3.78541).toFixed(3);
    poundEl.innerText = inputConvert.value; 
    poundEl.innerText = (inputConvert.value * 2.20462).toFixed(0);
    kiloEl.innerText = inputConvert.value; 
    kiloEl.innerText = (inputConvert.value * 0.453592).toFixed(3);

   
   
}


