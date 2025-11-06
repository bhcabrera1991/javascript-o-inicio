// Boas práticas
/*1. Escreva código legível
2Use const e let em vez de var
Evite código duplicado*/

// Case sensitive
/*Case sensitive significa que o sistema diferencia letras maiúsculas de minúsculas. Ou seja, "Bruno" é diferente de "bruno".*/

// Sintaxe básica e comentário
/*Sintaxe básica é o conjunto de regras que definem como escrever corretamente os comandos de uma linguagem de programação*/
console.log("ola mundo")

// Declaração de variáveis(var, let, const)
/*Na programação, variáveis são como "caixinhas" onde você guarda informações (números, textos, listas etc.) para usar depois.
Declarar uma variável significa criar essa caixinha e dar um nome para ela.*/
 /*Imagine que você tem caixinhas para guardar informações. var(Você pode abrir, fechar e trocar o conteúdo várias vezes.) let (Você também pode trocar o conteúdo.
 const(Você não pode trocar o conteúdo depois de guardar) var (modelo antigo de escrever)*/

 let nome = "bruno"
 console.log(nome)
 nome ="rafael"
 console.log(nome)
 const idade=19
 console.log(idade)
 

// Console e Debug
/*console(O console é uma ferramenta usada para mostrar mensagens no navegador ou ambiente de desenvolvimento.
Você usa o console.log() para ver o que está acontecendo no seu código.Outros tipos de console:console.log() → mostra mensagens comuns
console.error() → mostra erros
console.warn() → mostra avisos
console.table() → mostra dados em formato de tabela
Debug (ou "depuração") é o processo de encontrar e corrigir erros no código.
Você pode usar o console.log() para ajudar, mas também pode usar ferramentas do navegador (como o DevTools do Chrome ou Edge).*/
/*console.warn("atencao")
console.info("informacao")
console.erro("erro")*/


//Tipos de dados
// string
let cidade = "americana"
//number
let salario = 2000
//boolean
let fumante = false

console.log(typeof cidade)
console.log(typeof 2000)
console.log(typeof fumante)




// Operadores
//     Operador Atribuição

salario = 2500

//     Operadores aritméticos
//(+,-,/,*)

let n1=10, n2=5
console.log(n1+n2)//soma
console.log(n1-n2)//subtracao
console.log(n1*n2)//multiplicacao
console.log(n1/n2)//divisao
console.log(10%3)//modulo(mostra o resto da divisao)

//     Operadores relacionais

//==,<,>,<=,>=!=,===
console.log(n1==n2)
console.log(n1!=n2)
console.log(n1>n2)
console.log(n1>=n2)
console.log(n1<=n2)
console.log(n1<n2)



//     Operadores lógicos 

let altura =1.8
let peso =80
let tipo ="crianca"

//muda o resultado final, se for verdadeiro vira falso e se for falso vira verdadeiro
console.log(!10>5)

//com ||(ou) apenas uma verificacao precisa ser verdadeira
console.log(altura>1.50 || peso<150 || tipo!="crianca")

// com &&(e) todas as verificacoes devem ser verdadeiras para resultado final ser verdadeiro
console.log(altura >1.5 && peso <150 && tipo=="crianca")

// Estrutura
//     Estrutura de controle/decisão

let carro ="fiat"
if(carro=="bmw"){
    console.log("vc ta bem mais ou menos")
} else{
    console.log("a vida ta progredindo")
}

let idadealuno=20
if(idadealuno>=18){
    console.log("maior de idade")
}else{
    console.log("menor de idade")
}

//     Laços de repetição

let controle=1
while(controle<=10){
    console.log(controle)
    controle=controle+1
}

controle=1
while(controle <=10){
    console.log(7*controle)
    controle=controle+1
}

// Arrays --> vetor

let zoologico=['leao', 'elefante','zebra','ariranha','lobo guara',"arara"]
console.log(zoologico[2])
console.log(zoologico.length)//.length(ele conta o tanto de "casa/elemento" no vetor) 

let fruta=["🍓",'🍊',"🍍",'🍐']
console.log(fruta.length)
fruta.push('🤣')//.push(ele aumenta mais uma "casa/elemento" no vetor)
console.log(fruta.length)


let aluno =[]
aluno.push("bruno")
aluno.push('henrique')
console.log(aluno)


// Funções personalizadas
//para criar uma funcao tem que chamar o COMANDO function

function mensagem(){
    console.log("ola")
    console.log("Seja bem vindo")
    console.log("🤣")
}
mensagem()

function conta(horas,salario){
    console.log(horas*salario)
}

conta(140,75)