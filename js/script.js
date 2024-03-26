//calculando o IMC
//let= não permite que a variável seja "redeclarada" e só funciona denro do seu escop
//const= semelhante ao let com uma observação: NÃO PODE TER SEU VALOR ALTERADO.
//Var= Cria uma variável, porém, permite que seja "redeclarada" podendo causar bugs.

const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const btnCalcular = document.querySelector('#btn-calcular');
const contentIMC = document.querySelector('.content-imc');
const resultIMC = document.querySelector('.result-imc');
const btnRefazer  = document.querySelector('#btn-refazer');

const infoResult = document.querySelector('.result-imc h2 span')// IMC
const infoClass = document.querySelector('.result-imc p span')// STATUS DA CLASSIFICAÇÃO

//"cor" (parâmetro) representa a cor passada no momento da chamada da função
function colorIMC(cor){
    infoClass.style.color= cor;
    infoResult.style.color= cor;
}
// se o peso e altura forem diferentes de vazio
//== comparação (igualdade)
//!= comparação (difrença)
// && significa e
//|| significa ou

//Ao Clicar no botão de calcular.
btnCalcular.addEventListener('click', function(){

    if (peso.value != '' && altura.value != ''){
        //alternado o show
    
        contentIMC. classList.toggle('show');
        resultIMC. classList.toggle('show');


        let valorPeso = parseFloat(peso.value);
        let valorAltura = parseFloat(altura.value);

        let imc = valorPeso/ (valorAltura*valorAltura);

        //alert(imc);

        infoResult.innerHTML = imc.toFixed(2);

        // >= maior ou igual
        //<= menor ou igual
        // && e
        // || ou

        if(imc < 18.5){
            infoClass.innerHTML='Magreza'
            colorIMC('red'); //chamando a função, passando um parâmetro
            
        } 

        //se o imc for maior ou igual que 18.5 e menor ou igual que 24.9
        else if( imc>= 18.5 && imc<=24.9){
            infoClass.innerHTML='Normal'
            colorIMC('green');
            
    
        }

        else if( imc>= 25.0 && imc<=29.9){
            infoClass.innerHTML='Sobrepeso'
            colorIMC('yellow');
        }

        else if( imc>= 30.0 && imc<=39.9){
            infoClass.innerHTML='Obesidade'
            colorIMC('red');
        }

        // só pode ser maior ou igual que 40
        else{
            infoClass.innerHTML='Obesidade Grave'
            colorIMC('#B10303');
        }


        
    }


    else{
        alert('Preencha os campos para calcular');
    }
    

})

//para refazer o teste
btnRefazer.addEventListener ('click', function(){

    resultIMC. classList.toggle('show');
    contentIMC. classList.toggle('show');

    //limpando os campos

    peso.value='';
    altura.value='';

    //outra forma o formulário: document.querySelector('form').reset();
})





 

