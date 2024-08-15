/* Desenvolva seu código abaixo */
function playRockPaperScissor (player1, player2) {

    let resultado = "";
  
    if (
    (player1 === "Pedra" && player2 === "Tesoura") ||
    (player1 === "Tesoura" && player2 === "Papel") ||
    (player1 === "Papel" && player2 === "Pedra")
    ){

      resultado = "Jogador 1 venceu!";
  
    } else if (
    (player2 === "Pedra" && player1 === "Tesoura") ||
    (player2 === "Tesoura" && player1 === "Papel") || 
    (player2 === "Papel" && player1 === "Pedra")
    ){
  
      resultado = "Jogador 2 venceu!";
  
    } else if (player1 === player2){
  
      resultado = "Empate!";

    }
  
    return resultado;
  
  }
  
  console.log(playRockPaperScissor("Tesoura", "Tesoura"))