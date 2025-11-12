

function fnConverterValor(){
    alert("Foi convertido2.0")
}

function fnConverterValor(){
    console.log("foi convertido")
}

function fnConverterValor(){
    document.getElementById("valorConvertido").innerText="Deu certo"
}

function fnConverterValor(){
    let valorDigitado =0, total=0
    valorDigitado=document.getElementById("valor").value 
    total=valorDigitado*5.29
    document.getElementById("valorConvertido").innerText=("R$" +total.toFixed(2))
}


function fnEuro(){
    let valor=0,total=0
    valor = document.getElementById("euro").value
    total=valor*0.86
    document.getElementById("resultado").innerText=("€"+ total)
}
