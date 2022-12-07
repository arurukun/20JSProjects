const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");

// show input error message
function showError(input,message){
    const formControll=input.parentElement;
    formControll.className="form-controll error";
    const small=formControll.querySelector("small");
    small.innerText=message;
}

// check email

//  function isValidEmail(email){
//     const re=/^([a-zA-Z\d\.]{1,10})@([a-zA-Z\.]{1,9}).(com)$/;
//     return re.test(String(email).toLowerCase());
//  }

//  check email another way
 function checkEmail(input){
    // const re2 = /^([a-zA-Z]{5,15})$/;
    const re=/^([a-zA-Z\d\.]{1,10})@([a-zA-Z]{1,9}).(com)$/;
    // console.log("");
    if(re.test(String(input.value).toLocaleLowerCase())){
        showSuccess(input);
    }else{
        showError(input, "Email is not valid");
    }
 }    

// show success outline
function showSuccess(input){
    const formControll=input.v;
    formControll.className="form-controll success";
}

form.addEventListener("submit" ,function(e){
    e.preventDefault();

// paturn1
    checkRequired([username,email,password,password2]);
    checkLenth(username,5,15);
    checkLenth(password,5,25);
    checkEmail(email);
    checkPasswordMatch(password,password2);
});

// check Required
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ""){
            // showError(input,`${input.id} is required`);
            showError(input,`${getFeildName(input)} is required`);
        }else{
            showSuccess(input);
        }
    });
}

function getFeildName(input){
    // return input.id.toUpperCase();
    // return input.id.charAt(0).toUpperCase() ;
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLenth(input,min,max){
    if(input.value.length < min){
        showError(input,`${getFeildName(input)}  must be at least ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFeildName(input)}  must be less than ${max} characters`);
    }else{
        showSuccess(input);
    }
}

// check password
function checkPasswordMatch(input1,input2){
    if(input1.value !== input2.value ){
        showError(input2,"Passwords do not match");
    }
}

// another paturn for showing error messages

    // console.log(username.value);
//     if(username.value === ""){
//         // alert("username is require")
//         showError(username,"username is require");
//     }
//     else{
//         showSuccess(username);
//     }

//     if(email.value === ""){
//         showError(email,"Email is require");
//     }
//     else if(!isValidEmail(email.value)){
//         showError(email,"Email is not valid")
//     }
//     else{
//         showSuccess(email);
//     }

//     if(password.value === ""){
//         showError(password,"password is require");
//     }
//     else{
//         showSuccess(password);
//     }

//     if(password2.value === ""){
//         showError(password2,"conmform password is require");
//     }
//     else{
//         showSuccess(password2);
//     }
// })