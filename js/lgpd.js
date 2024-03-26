//--------------LGPD----------
 
var lgpd = document.querySelector('.lgpd');
var btnLgpd = document.querySelector('.lgpd button')

//console.log(lgpd);
//console.log(btnLgpd);

//associar o evento de click ao botão lgpd

btnLgpd.addEventListener('click',function(){
    //alert('ok');

    //pedindo para o js aplique o display none no elemento lgpd. 
    lgpd.style.display = 'none';
})

// além de fechar, vamos guardar uma informação no navegador do usuário.
                     //chave, valor
localStorage.setItem('fecharLgpd','sim');

if (localStorage.getItem('fecharLgpd') == 'sim'){
    lgpd.style.display = 'none';
}