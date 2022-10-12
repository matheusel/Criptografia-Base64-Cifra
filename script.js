// Script do butão de enviar / Quando selecionar o tipo de criptografia o nome do botão muda
const btnSubmit = document.getElementById("Input_Submit");
const inputCriptografar = document.getElementById("Criptografar");
const inputDescriptografar = document.getElementById("Descriptografar");
let escolher = document.getElementById("SelecionarAlgoritimo");
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
escolher.addEventListener('change', function (){

    if (escolher.value == 'vCifra') {
        cifraIncrementar.style.display = 'block';
    } else if (escolher.value == 'vBase') {
        cifraIncrementar.style.display = 'none';
    }
})

// Script para codificar base 64
function codificarBase64() {
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextInput = btoa(vTextArea);
    let vTextOutput = document.getElementById("textareaCopie");
    
    vTextOutput.innerText = vTextInput
    console.log(vTextOutput)
}

// Script para descodificar base 64
function descodificarBase64(){
    let vTextArea = document.getElementById("textareaEscreva").value;
    let vTextInput = atob(vTextArea);
    let vTextOutput = document.getElementById("textareaCopie");
    
    vTextOutput.innerText = vTextInput
    console.log(vTextOutput)
}