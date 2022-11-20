const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const passeord=document.getElementById("password");
const password2=document.getElementById("password2");

// show input error message

function showError(input,message){
    const formControll=input.parentElement;
    formControll.className="form-controll success";
    const small=formControll.querySelector("small");
    small.innerText=message;
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
})