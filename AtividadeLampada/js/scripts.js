var led = "ligar";
const ligar = () =>{
    let btnEnviar = document.getElementById("btnEnviar");
    let imgLampada = document.getElementById("lampada");

    if (led == "ligar"){
// lampada.innerHTML = '<img id="lampada" src="img/acesa.jpg" alt="Lâmpada"></img>';
imgLampada.src ="./img/acesa.jpg";
imgLampada.alt = "Lâmpada acesa"

btnEnviar.innerHTML = "Apagar";
led = "apagar";
} else{
    // lampada.innerHTML = '<img id="lampada" src="img/apagada.jpg" alt="Lâmpada"></img>';
    imgLampada.src ="./img/apagada.jpg";
    imgLampada.alt = "Lâmpada apagada"

btnEnviar.innerHTML = "Acender";
led = "ligar";
}
}

//Atividade 2
const gerarImagem =() =>{
let qtdImagem = document.getElementById("inQtdImg").value;//valor informado pelo usuário

let canvas = document.getElementById("canvas")
console.log(qtdImagem)

canvas.innerHTML = ``

for (let i = 0; i < qtdImagem; i++) {
 canvas.innerHTML += `<img class="imagens" src="https://i.gifer.com/fetch/w300-preview/5f/5faf8aaf749651f7d18b82bcf142cb13.gif" alt="">`
    
}
}

//Atividade 3

//Atividade 4


const calcular =() =>{
let pedido = document.getElementById("inValorPedido").value
let porcDesc = document.getElementById("inPercDesc").value
let valDesc = document.getElementById("inValDesc").value
let valFinal = document.getElementById("inValFinal").value

pedido >= 2000?{porcDesc.innerHTML ="0.5"}

}