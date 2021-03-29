var numeroSecreto = parseInt(Math.random() * 10)
var tentativas = 3

while (tentativas > 0) {
    var chute = parseInt(prompt("Digite um número de 0 e 10"))

    if(numeroSecreto == chute){
        alert("Vocẽ acertou")
        break
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor")
        tentativas = tentativas -1
    } else if(chute < numeroSecreto) {
        alert("O número secreto é maior")
        tentativas = tentativas -1
    }
}

if (chute != numeroSecreto){
    alert("Você errou, o número era " + numeroSecreto)
}