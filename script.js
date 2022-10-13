// Script do select option / Quando selecionar o tipo de criptografia o nome do botão muda
const btnSubmit = document.getElementById("Input_Submit");
const inputCriptografar = document.getElementById("Criptografar");
const inputDescriptografar = document.getElementById("Descriptografar");
let escolherAlgoritimo = document.getElementById("SelecionarAlgoritimo");
let cifraIncrementar = document.getElementById("cifraIncremento");

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

// Script para codificar base 64
function codificarBase64() {
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextInput = btoa(vTextArea);
    let vTextOutput = document.getElementById("textareaCopie");
    
    vTextOutput.innerText = vTextInput
}

// Script para descodificar base 64
function descodificarBase64(){
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextInput = atob(vTextArea);
    let vTextOutput = document.getElementById("textareaCopie");
    
    vTextOutput.innerText = vTextInput
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