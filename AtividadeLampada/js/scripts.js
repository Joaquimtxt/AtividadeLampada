var led = "ligar";

document.getElementById("mensagem-erro").style.display = "none";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = '<img id="lampada" src="img/acesa.jpg" alt="Lâmpada"></img>';
    imgLampada.src = "./img/acesa.jpg";
    imgLampada.alt = "Lâmpada acesa";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = '<img id="lampada" src="img/apagada.jpg" alt="Lâmpada"></img>';
    imgLampada.src = "./img/apagada.jpg";
    imgLampada.alt = "Lâmpada apagada";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

//Atividade 2
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value; //valor informado pelo usuário

  let canvas = document.getElementById("canvas");
  console.log(qtdImagem);

  canvas.innerHTML = ``;

  for (let i = 0; i < qtdImagem; i++) {
    canvas.innerHTML += `<img class="imagens" src="https://i.gifer.com/fetch/w300-preview/5f/5faf8aaf749651f7d18b82bcf142cb13.gif" alt="">`;
  }
};

//Atividade 3

const validaForm = () => {
    //Dados coletados
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  msgErro.innerText = "";

  //Validando dados
  inData == "" && (msgErro.innerHTML += "Data inválida! <br>");
  inCli == "" && (msgErro.innerHTML += "Nome inválido!<br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválido! <br>");
  inMail == "" && (msgErro.innerHTML += "Email inválido! <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválido! <br>");
  inQtd == "" && (msgErro.innerHTML += "Quantidade inválida! <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválido! <br>");

msgErro.innerText == ""? (msgErro.style.display = "none") : (msgErro.style.display = "block")
};
//Atividade 4

const calcular = () => {
  let pedido = document.getElementById("inValorPedido").value;
  let percDesconto = document.getElementById("inPercDesc");
  let valDesconto = document.getElementById("inValDesc");
  let valFinal = document.getElementById("inValFinal");

  switch (true) {
    case pedido >= 2000:
      percDesconto.value = 1.5;

      break;
    case pedido >= 1500:
      percDesconto.value = 1;

      break;
    case pedido >= 1000:
      percDesconto.value = 0.8;

      break;
    case pedido >= 500:
      percDesconto.value = 0.5;

      break;

    default:
      percDesconto.value = 0;
      valDesconto.value = 0;
      valFinal.value = pedido;
      break;
  }
  valDesconto.value = pedido * (percDesconto.value / 100);
  valFinal.value = pedido - valDesconto.value;
};
