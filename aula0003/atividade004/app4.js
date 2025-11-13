//document.write("<h1>sou")

//document.write("<img src='imagens/filme01.jpg'>")
//document.write("<img src='imagens/filme02.jpg'>")
//document.write("<img src='imagens/filme03.jpg'>")

let filmes=["filme01.jpg","filme02.jpg","filme03.jpg"]

let contador=0
while(contador <6){
    document.write("<img src='imagens/"+ filmes[contador]+"'>")
    contador=contador+1
    filmes.push("filme04.jpg","filme05.jpg","filme06.jpg")
}

