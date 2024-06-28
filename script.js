let num1;
let num2;
let total;

function entrada(){
    //armazena nas variaveis os valors input//
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
}


function somar(){
    //armazena nas variaveis os valors input//
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //calcular e exibir na tela//
    total = document.getElementById("resultado");
    total.innerHTML = num1 + num2;  
}
function subtrair(){
    //armazena nas variaveis os valors input//
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //calcular e exibir na tela//
    total = document.getElementById("resultado");
    total.innerHTML = num1 - num2;  
}


function multiplicar(){
    //armazena nas variaveis os valors input//
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //calcular e exibir na tela//
    total = document.getElementById("resultado");
    total.innerHTML = num1 * num2;  
}


function dividir(){
    //armazena nas variaveis os valors input//
    num1 = document.getElementById("n1").value;
    num2 = document.getElementById("n2").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    //calcular e exibir na tela//
    total = document.getElementById("resultado");
    total.innerHTML = num1 / num2;  
}

function limpar(){
    total = document.getElementById("resultado");
    total.innerHTML = "  ";

    document.getElementById("n1").value="";
    document.getElementById("n2").value="";

}