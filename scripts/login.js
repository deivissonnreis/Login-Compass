var user = document.getElementById("user-form");
var password = document.getElementById("password-form");
var buttonContinue = document.getElementById("button-continue");
var error = document.getElementById("error-msg");
var iconUser = document.querySelector(".icon-user");
var iconPass = document.querySelector(".icon-pass");


buttonContinue.addEventListener('click', (e) => {
    
    e.preventDefault();
    let info = {
        userName: user.value,
        userPass: password.value,
    }

   
    if(info.userName == '' || info.userPass == '' || info.userName != 'admin' && info.userPass != 'admin'){
        
        error.classList.remove("ocult");
        user.classList.add("inputs-fail");
        password.classList.add("inputs-fail");
        iconUser.classList.remove("transition-icons");
        iconPass.classList.remove("transition-icons");
        user.value = '';
        password.value = '';

        
    }else{
        console.log(info.userName);
        console.log(info.userPass);
    }
    
    
    
})


user.addEventListener('focus', () =>{
    iconUser.classList.add("transition-icons");
    
})

user.addEventListener('blur', () =>{
        if(user.value == ''){
            iconUser.classList.remove("transition-icons");
        }else{

        }
      
})

password.addEventListener('focus', () =>{
    
    iconPass.classList.add("transition-icons");
    
})

password.addEventListener('blur', () =>{
        if(password.value == ''){
            iconPass.classList.remove("transition-icons");
        }else{

        }
      
})
