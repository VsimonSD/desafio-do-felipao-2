// Declarando variáveis
let ranking = "";
let AllVictories = victories(40, 10);
let levelRanking = GetRanking(AllVictories, ranking);

//Exibindo o saldo de vitórias e o level atual
console.log(`O herói tem de saldo de ${AllVictories} vitórias e está no nível ${levelRanking}`);

//Iniciando loop para jogar novamente
console.log(`Deseja jogar novamente? Digite sim ou não`);

let playAgain = "sim";

//Se o jogador escolher jogar novamente, pode escolhar em qual nível o loop deve parar. Até lá, o código incrementa no saldo de vitórias
if (playAgain === "sim") {
  console.log("digite abaixo o levelRanking que seu herói deve alcançar");

  do {
    AllVictories++;
    levelRanking = GetRanking(AllVictories, ranking);
  } while (levelRanking != "Lendário");

  console.log(`O saldo atual do herói é de ${AllVictories} vitórias e subiu para o nível ${levelRanking}`);

  //Caso o jogador escolha encerrar, aparece o agradecimento
} else {
  console.log("Obrigado por jogar conosco!");
}

//Criando funções para retornar ranking e efetuar calculo do saldo de vitórias
function GetRanking(AllVictories, ranking) {
  if (AllVictories < 10) {
    ranking = "Ferro";
  } else if (AllVictories >= 11 && AllVictories <= 20) {
    ranking = "Bronze";
  } else if (AllVictories >= 21 && AllVictories <= 50) {
    ranking = "Prata";
  } else if (AllVictories >= 51 && AllVictories <= 80) {
    ranking = "Ouro";
  } else if (AllVictories >= 81 && AllVictories <= 90) {
    ranking = "Diamante";
  } else if (AllVictories >= 91 && AllVictories <= 100) {
    ranking = "Lendário";
  } else if (AllVictories >= 101) {
    ranking = "Imortal";
  }
  return ranking;
}

function victories(totalVictories, totalDefeats) {
  let calc = totalVictories - totalDefeats;
  return calc;
}
