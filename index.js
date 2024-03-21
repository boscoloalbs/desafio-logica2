//Segundo Desafio do Curso de Lógica de Programação da DIO
//Declaração de Variáveis utilizando a função de gerar números aleatórios entre 1 e 999
let numberWin = 150
let numberLoss = Math.floor(Math.random() * (1 - 149) + 149)
let rank = calculateHeroRank(numberWin, numberLoss)

//Função para calcular o número de vitórias
function calculateHeroRank (numberWin, numberLoss){
    let heroRank  = numberWin - numberLoss
    return heroRank
}

//Teste de Condições para verificar em qual nível o herói está
switch (true){
    case rank <= 10:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível FERRO")
    break

    case rank >= 11 && rank < 20:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível BRONZE")
    break

    case rank >= 21 && rank < 50:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível PRATA")
    break

    case rank >= 51 && rank < 80:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível OURO")
    break

    case rank >= 81 && rank < 90:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível DIAMANTE")
    break

    case rank >= 91 && rank < 100:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível LENDÁRIO")
    break

    case rank >= 101:
        console.log("O Herói tem um saldo de ",rank , "vitórias e está no nível IMORTAL")
    break
}

