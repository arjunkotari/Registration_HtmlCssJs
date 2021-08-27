function Name(){
    const text = document.querySelector('#text');
    const textError = document.querySelector('.name-error');
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');

    if(nameRegex.test(text.value)){
        textError.textContent=" ";
    }
    else {
        textError.textContent = "Namee is Incorrect";
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