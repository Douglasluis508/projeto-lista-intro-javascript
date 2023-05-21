// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura,largura) {
  // implemente sua lógica aqui
altura =Number(prompt('Digite a altura'))
largura =Number(prompt('Digite a largura'))
console.log(altura*largura)

}

// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  anoAtual =Number(prompt('Digite o ano atual'))
  anoNascimento =Number(prompt('Digite o ano em que nasceu'))
  idade = anoAtual - anoNascimento
  console.log(anoAtual - anoNascimento)
  // implemente sua lógica aqui

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
let = peso /(altura * altura)
return peso/(altura* altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade , email) {
  nome =prompt('Digite seu nome')
  idade =Number(prompt('Digite sua idade'))
  email =prompt('Digite seu email')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2 , cor3) {
  cor1 = prompt ('Digite a cor favorita 1')
  cor2 = prompt ('Digite a cor favorita 2')
  cor3 = prompt ('Digite a cor favorita 3')
  const favoritas = [cor1, cor2 , cor3]
  console.log(favoritas)
  // implemente sua lógica aqui

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(texto) {
  let maiuscula = texto.toUpperCase()
  return maiuscula
  // implemente sua lógica aqui

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valor) {
  // implemente sua lógica aqui
let vendas = custo/valor
return vendas
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(caneta, celular) {
  // implemente sua lógica aqui
  return caneta.length === celular.length


}


// EXERCÍCIO 09
function retornaPrimeiroElemento(lápis, mouse, teclado) {
  return lápis [0]
  // implemente sua lógica aqui

}

// EXERCÍCIO 10
function retornaUltimoElemento(celular) {
  // implemente sua lógica aqui
 return celular[celular.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(texto) {
  // implemente sua lógica aqui
let texto1 = texto[texto.length-1]  
let texto2 = texto[0]

texto[texto.length-1] = texto2
texto[0] =texto1 
return texto
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual=Number(prompt('Digite o ano atual'))
let anoNascimento=Number(prompt('Digite seu ano de nascimento'))
let anoemissaoRg=Number(prompt('Digite o ano de emissão do RG'))
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}