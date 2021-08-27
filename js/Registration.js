function Name(){
    const text = document.querySelector('#text');
    const textError = document.querySelector('.name-error');
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');

    if(nameRegex.test(text.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "Name is Incorrect";
        }
}

function Email(){
    const mail = document.querySelector('#email');
    const textError = document.querySelector('.mail-error');
    let mailRegex = RegExp('^([a-z0-9]+.)+@([a-z0-9]+.)([a-z]+.)[a-z]{2,3}$');
    if(mailRegex.test(mail.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "email is Incorrect";
        }
}

function MobileNumber(){
    const number = document.querySelector('#number');
    const textError = document.querySelector('.number-error');
    let numberRegex = RegExp('^[0-9]{2}[ ]{1}[0-9]{10}$');
    if(numberRegex.test(number.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "Number is Incorrect";
        }
}


function Password(){
    const password = document.querySelector('#pwd');
    const textError = document.querySelector('.password-error');
    let passwordRegex = RegExp('^(?=.*[A-Z])(?=.*[0-9])(?=.+[!@#$%^&+=._-])[A-Za-z0-9].{7,}$');
    if(passwordRegex.test(password.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "Password is Incorrect";
        }
}
