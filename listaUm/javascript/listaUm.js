function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10);

console.log(soma);

var idade, eleitor, resultado;
idade=18;
eleitor= (idade<18) ? "Não eleitor " : "Sim , eleitor";
alert('A resposta é ' + eleitor);

resultado = (idade> 60 && idade <70);
alert(resultado);
