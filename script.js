// Script do select option / Quando selecionar o tipo de criptografia o nome do botão muda
const btnSubmit = document.getElementById("Input_Submit");
const inputCriptografar = document.getElementById("Criptografar");
const inputDescriptografar = document.getElementById("Descriptografar");
let escolherAlgoritimo = document.getElementById("SelecionarAlgoritimo");
let cifraIncrementar = document.getElementById("Incremento");
let alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
inputCriptografar.addEventListener('click', function (){
    btnSubmit.style.display = 'inline';
    btnSubmit.innerText = "Criptografar";
})

inputDescriptografar.addEventListener('click', function (){
    btnSubmit.style.display = 'inline';
    btnSubmit.innerText = "Descriptografar";
})

// Script do incremento / Quando selecionar Cifra de César o contador aparece no display
escolherAlgoritimo.addEventListener('change', function (){

    if (escolherAlgoritimo.value == 'vCifra') {
        cifraIncrementar.style.display = 'block';
    } else if (escolherAlgoritimo.value == 'vBase') {
        cifraIncrementar.style.display = 'none';
    }
})

// Script para codificar Base 64
function codificarBase64() {
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextInput = btoa(vTextArea);
    let vTextOutput = document.getElementById("textareaCopie");
    
    vTextOutput.innerText = vTextInput
}

// Script para descodificar Base 64
function descodificarBase64(){
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextInput = atob(vTextArea);
    let vTextOutput = document.getElementById("textareaCopie");
    
    vTextOutput.innerText = vTextInput
}

// Script para codificar Cifra de César

function codificarCifra(){
    let cifraIncrementar = document.getElementById("cifraIncremento").value;
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextOutput = document.getElementById("textareaCopie");
    let transformMinusculo = vTextArea.toLowerCase();
    let transformNumero = (Number(cifraIncrementar) % 26);
    let vTextOutputCodificado = "";

    for (let i = 0; i < transformMinusculo.length; i++){
        for (let x = 0; alfabeto.length; x++){
            if (transformMinusculo[i] == alfabeto [x]){
                vTextOutputCodificado += alfabeto [x + transformNumero]
                break;
            } else if (transformMinusculo[i] == " ") {
                vTextOutputCodificado += " ";
                break;
            }
        }
    }
    vTextOutput.innerText = vTextOutputCodificado
}

// Script para descodificar Cifra de César

function descodificarCifra(){
    let cifraIncrementar = document.getElementById("cifraIncremento").value;
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextOutput = document.getElementById("textareaCopie");
    let transformMinusculo = vTextArea.toLowerCase();
    let transformNumero = (Number(cifraIncrementar) % 26);
    let vTextOutputCodificado = '';

    for (let i = 0; i < transformMinusculo.length; i++){
        for (let x = alfabeto.length -1; x >= 0; x--){
            if (transformMinusculo[i] == alfabeto [x]){
                vTextOutputCodificado += alfabeto [x - transformNumero]
                break;
            } else if (transformMinusculo[i] == ' ') {
                vTextOutputCodificado += ' ';
                break;
            }
        }
    }
    vTextOutput.innerText = vTextOutputCodificado    
}


// Script do butão de enviar

function btnEnviar () {
    let btnSubmit = document.getElementById("Input_Submit");
    let escolherAlgoritimo = document.getElementById("SelecionarAlgoritimo");
    const inputCriptografar = document.getElementById("Criptografar");
    const inputDescriptografar = document.getElementById("Descriptografar");

    event.preventDefault()

    if (inputCriptografar.checked && escolherAlgoritimo.value == "vBase"){
        codificarBase64();
    } else if (inputCriptografar.checked && escolherAlgoritimo.value == "vCifra") {
        codificarCifra();
    } else if (inputDescriptografar.checked && escolherAlgoritimo.value == "vBase") {
        descodificarBase64();
    } else if (inputDescriptografar.checked && escolherAlgoritimo.value == "vCifra") {
        descodificarCifra();
    } else {
        alert ("Escolha uma das opções para Criptografar")
        
    }
}