var timer = document.querySelector(".timer");

timer.innerHTML = 500;

 function countdown (){

    count = timer.innerHTML - 1;
    timer.innerHTML = count;
    setTimeout(() => {countdown()}, 1000);
    if(count <= 0){
        var reload = window.confirm("Deseja continuar logado?")
        if(reload){
            location.reload()
        }else{
            window.location.replace('index.html');
        }
    }

}
countdown();

    
var logOut = document.querySelector(".a-logout");

logOut.addEventListener('click', ()=>{
   var confirm = window.confirm("Deseja fazer o logout? 'OK' para sair, 'Cancelar' para continuar logado");
    if(confirm){
        window.location.replace('index.html');
    }else{
        localStorage.clear();
        window.location.replace('index.html');
    }
})
