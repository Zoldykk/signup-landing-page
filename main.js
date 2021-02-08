const form = document.querySelector('form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const firstNameError = document.querySelector('#firstName-error')
const lastNameError = document.querySelector('#lastName-error')
const emailError = document.querySelector('#email-error')
const passwordError = document.querySelector('#password-error')
const errorIcon = document.querySelector('.error-icon')


form.addEventListener('submit', (e) =>{
    let errorsCount = []
    if(firstName.value === ''){
        firstNameError.innerHTML = 'First Name cannot be empty'
        firstName.classList.add('error-active')
        errorsCount.push(1)
    }

    if(lastName.value === ''){
        lastNameError.innerHTML = 'Last Name cannot be empty'
        lastName.classList.add('error-active')
        errorsCount.push(1)
    }
    
    const validateEmail = /^[^@]+@\w+(\.\w+)+\w$/.test(email.value);
    
    if(validateEmail == false){
        emailError.innerHTML = 'Looks like this is not an email'
        email.classList.add('error-active')
        errorsCount.push(1)
    }
    
    if(email.value === ''){
        emailError.innerHTML = 'Email cannot be empty'
        email.classList.add('error-active')
        errorsCount.push(1)
    }

    if(password.value.length < 6){
        passwordError.innerHTML = 'Password must be at least 6 characters'
        password.classList.add('error-active')
        errorsCount.push(1)
    }

    if(password.value === ''){
        passwordError.innerHTML = 'Password cannot be empty'
        password.classList.add('error-active')
        errorsCount.push(1)
    }

    if(errorsCount.length > 0){
        e.preventDefault()
    }
})