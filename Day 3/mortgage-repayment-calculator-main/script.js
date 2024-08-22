const amount = document.getElementById("currency-symbol")
const years = document.getElementById("years-symbol")
const rate = document.getElementById("rate-symbol")
const repayment = document.getElementById("repayment")
const interest = document.getElementById("interest")
const calulateBtn = document.getElementById("calulate")
const submit = document.querySelector("form")

console.log(calulateBtn);



submit.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log((repayment.checked ? repayment : interest).checked);
    console.log(check(amount.value, years.value, rate.value, (repayment.checked ? repayment : interest).checked))
})


function check(amount, years, rate, type) {
    console.log(amount);
    if (amount == "") {
        errorMessage('currency-symbol')
        document.querySelector(".currency-error").innerHTML += "<small>This field is required</small>"
    }
    if (years == "") {
        errorMessage('years-symbol')
        document.querySelector('.years-symbol').style.right = "0px";
        document.querySelector(".years-error").innerHTML += "<small>This field is required</small>"
    }
    if (rate == "") {
        errorMessage('rate-symbol')
        document.querySelector('.rate-symbol').style.right = "0px";
        document.querySelector(".rate-error").innerHTML += "<small>This field is required</small>"
    }
    if (type == "") {
        document.querySelector(".radio-error").innerHTML += "<small>This field is required</small>"
    }
    return true
}

function errorMessage(name) {
    document.querySelector(`.${name}`).style.backgroundColor = "hsl(4, 69%, 50%)";
    document.querySelector(`#${name}`).style.borderColor = "hsl(4, 69%, 50%)";
    document.querySelector(`.${name}`).style.height = "100%";
    document.querySelector(`.${name}`).style.color = "white";
    // calulateBtn.disabled = true;
}