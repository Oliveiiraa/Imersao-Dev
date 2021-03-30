var cartaGabriel = {
    nome: "Homem de ferro",
    atributos:{
        ataque: 80,
        defesa: 60,
        magia: 30
    }
}

var cartaPc = {
    nome: "Lorde Darth Vader",
    atributos:{
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}

var cartaMaquina
var cartaJogador
var cartas = [cartaGabriel, cartaPc];

function sortearCarta(){
    var numeroCartaMaquina = parseInt(Math.random() * 2)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 2)
    while(numeroCartaMaquina == numeroCartaJogador){
        numeroCartaJogador = parseInt(Math.random() * 2)
    }

    cartaJogador = cartas[numeroCartaJogador]

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;
    exibirOpcoes()

}

function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='"+ atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto

}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')

    for(var i = 0; i < radioAtributo.length; i++){
        if(radioAtributo[i].checked){
            return radioAtributo[i].value
        }
    }
}

function jogar(){
    var atributoSelecionado = obtemAtributoSelecionado()

    if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
        alert('Você venceu!')
    } else if(cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        alert('Você perdeu!')
    } else {
        alert('Empatou!')
    }
}