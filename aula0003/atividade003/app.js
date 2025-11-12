function fnJogo(){
    let chute = 0, numeroMagico = Math.floor(Math.random()*10)
    chute=document.getElementById("valor").value
    if(chute == numeroMagico){
        document.getElementById("resultado").innerText="Acertou"
    }else{
        document.getElementById("resultado")
        alert("Errou " +numeroMagico)
    }
}

