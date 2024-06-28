var jogador = "x";

function jogar(celula) {
    //verificar se a celula está vazia
    if (celula.innerHTML === "") {
        //escreva na celula
        celula.innerHTML = jogador;

        //alternar jogada
        //se jogada for igual a "x"
        if (jogador === "x") {
            jogador = "o";
            celula.style.backgroundColor="red";
        } else {          //se jogada for "o"
            jogador = "x";
            celula.style.backgroundColor="blue";
        }
    }
}
function reiniciar(){
    window.location.reload();
}


//criando uma lista no javascript
let nome1 = nomes[ Math.floor(Math.random * nomes.length)];
let nome2 = nomes[ Math.floor(Math.random * nomes.length)];





let numero = Math.random;
console.log('Numero sorteado:' + numero);
console.log('posição da lista sem arredondar: ' + numero * nomes.length);
console.log('posição da lsita arredondado: ' + Math.floor(numero * nomes.length));
console.log(' nome sorteado: ' + nomes[Math.floor(numero * nomes.length)]);