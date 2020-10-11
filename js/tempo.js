let cronometro = 0;
function iniciar(){
    document.getElementById('inicia').style.display = 'none' /* oculta o botao iniciar */
    document.getElementById('para').style.display = 'inline' /*mostra o botão parar */
    let time_h = document.getElementById('timer_hora');
    let time_m = document.getElementById('timer_minuto');
    let time_s = document.getElementById('timer_segundo');
    let time_d = document.getElementById('timer_decimo');

    let h = 0; m = 0; s = 0; d = 0;

    cronometro = setInterval(function(){
        time_h.innerHTML = h < 10 ? '0' + h:h;
        time_m.innerHTML = m < 10 ? '0' + m:m;
        time_s.innerHTML = s < 10 ? '0' + s:s;
        time_d.innerHTML = d < 10 ? '0' + d:d;

        if (d <9){
            d++;
        }else if(s < 59){
            d = 0;
            s ++
        }else if(m<59 ){
            d = 0;
            s = 0;
            m ++;
        }else if(h <23){
            d = 0;
            s = 0;
            m = 0;
            h++
        }


    },100);

}

function parar(){
    document.getElementById('inicia').style.display = 'inline' /* mostra o botão iniciar*/
    document.getElementById('para').style.display = 'none' /*oculta o botão parar */
    clearInterval(cronometro);
        document.getElementById('timer_hora').innerHTML = "00";
        document.getElementById('timer_minuto').innerHTML = "00";
        document.getElementById('timer_segundo').innerHTML = "00";
        document.getElementById('timer_decimo').innerHTML = "00";
}