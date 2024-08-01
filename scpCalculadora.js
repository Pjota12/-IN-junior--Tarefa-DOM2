let cont = 0
const buttonAdd = document.querySelector(".btnAdd")
const buttonMed = document.querySelector(".btnMed")
let array = []

function addNota(){
    let nota = document.querySelector(".inputUser").value
    let secao = document.querySelector(".Notas")
    let mensagem = document.createElement("p")
    cont++
    mensagem.innerText = "A nota " + cont + " foi " + nota
    let floatnota = parseFloat(nota)
    array.push(floatnota)
    secao.append(mensagem)
}
function calcularMedia(){
    let soma = 0
    for(nota of array){
        soma = soma + nota
    }
    let media = soma/cont
    let divMedia = document.querySelector(".divMedia")
    divMedia.innerHTML = ""
    let mensagemMedia = document.createElement("p")
    mensagemMedia.innerText = "A media é: " + media
    divMedia.append(mensagemMedia)
}

buttonAdd.addEventListener("click",()=>{
    let nota = document.querySelector(".inputUser").value
    if(nota < 0 || nota > 10){
        document.querySelector(".inputUser").value = "";
        alert("Apenas é aceito notas entre 0 e 10")
    }else{
        if(nota == ''){
            alert("nada foi digitado")
        }else{
            if(isNaN(parseFloat(nota))){
                document.querySelector(".inputUser").value = "";
                alert("Esse valor não é valido")
            }else{
                addNota()
                document.querySelector(".inputUser").value = "";
            }
        }
    }
})

buttonMed.addEventListener("click",()=>{
    let secao = document.querySelector(".Notas")
    if(secao.innerHTML == ""){
        alert("voce não digitou nenhuma nota")
    }else{
        calcularMedia()
        secao.innerHTML = ""
        cont = 0
        array = []
    }
})