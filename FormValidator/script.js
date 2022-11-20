const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const passeord=document.getElementById("password");
const password2=document.getElementById("password2");

// show input error message

function showError(input,message){
    const formControll=input.parentElement;
    formControll.className="form-controll error";
    const small=formControll.querySelector("small");
    small.innerText=message;
}

// check email
 function isValidEmail(email){
    const re=/^([a-zA-Z\d\.]{1,10})@([a-zA-Z\.]{1,9}).(com)$/;
    return re.test(String(email).toLowerCase());
 }

// show success outline

function showSuccess(input){
    const formControll=input.parentElement;
    formControll.className="form-controll success";
}

form.addEventListener("submit" ,function(e){
    e.preventDefault();

    // console.log(username.value);
    if(username.value === ""){
        // alert("username is require")
        showError(username,"username is require");
    }
    else{
        showSuccess(username);
    }

    if(email.value === ""){
        // alert("email is require")
        showError(email,"Email is require");
    }
    else if(!isValidEmail(email.value)){
        showError(email,"Email is not valid")
    }
    else{
        showSuccess(email);
    }

    if(password.value === ""){
        // alert("password is require")
        showError(password,"password is require");
    }
    else{
        showSuccess(password);
    }

    if(password2.value === ""){
        // alert("password2 is require")
        showError(password2,"conmform password is require");
    }
    else{
        showSuccess(password2);
    }
})