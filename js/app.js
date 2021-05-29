let validator = document.querySelector(".intro__input")
let validatorOutput = document.querySelector(".intro__validator")

validator.addEventListener("invalid", (event) => {
    event.preventDefault()
    if (!validator.value) {
        validatorOutput.innerHTML = "Oops! Please add your email"
    } else {
        validatorOutput.innerHTML = "Oops! Please check your email"
    }

})