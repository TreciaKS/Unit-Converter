// grab DOM elements and store in variables
let lenghtEl = document.getElementById("lenghtEl")
let volumeEl = document.getElementById("volumeEl")
let massEl = document.getElementById("massEl")
let num = document.getElementById("number-input")

function getLenght() {
    let metreToFeet = Number(num.value) *  3.2808
    let feetToMetres = Number(num.value)  * 0.3048
    lenghtEl.textContent = `${num.value} metres = ${feetToMetres} feet | ${num.value} feet = ${metreToFeet} metres`
}

function getVolume() {
    let litresToGallons = Number(num.value) *  0.2641
    let gallonsToLitres = Number(num.value) * 3.7854
    volumeEl.textContent = `${num.value} litres = ${litresToGallons} gallons | ${num.value} gallons = ${gallonsToLitres} litres`
}

function getMass() {
    let kilosToPounds = Number(num.value) *  2.2046
    let poundsToKilos = Number(num.value) * 0.4535
    massEl.textContent = `${num.value} kilos = ${kilosToPounds} pounds | ${num.value} pounds = ${poundsToKilos} kilos`
}

function calculate() {
    getLenght()
    getVolume()
    getMass()
}