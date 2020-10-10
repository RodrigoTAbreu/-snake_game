function inicio(){
    let intervalo;
    let hora = 0;
    let minuto = 0;
    let segundo = 1;

    let relogio = document.getElementById("tempo");


    intervalo = window.setInterval(function() {
        if (segundo == 60){
            minuto ++;
            segundo = 0;
        }
        if (minuto == 60){
            hora++;
            minuto = 0;
            segundo = 0;
        }
        if (hora < 10 ){
            relogio.innerHTML = `0${hora}`
        }else{
            relogio.innerHTML = `${hora}`
        }
    }, 1000);

}

function parar(){
    window.clearInterval(intervalo);

}





   /*
   
   let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let msec = date.getMilliseconds();
    let time = document.getElementById("tempo");

    time.innerHTML = `${hour}:${min}:${sec}`

    function atual(){
        alert('Teste')
    
 
}


a linha abaixo atualiza a página de modo automático.
document.location.reload(true);
*/