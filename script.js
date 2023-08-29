let diceRoll = document.getElementById("diceRoll");
let diceResult = document.getElementById("diceResult");
let diceImage = document.getElementById("diceImage");
let globalPlayer1 = document.getElementById("globalPlayer1");
let globalPlayer2 = document.getElementById("globalPlayer2");
let roundPlayer1 = document.getElementById("roundPlayer1");
let roundPlayer2 = document.getElementById("roundPlayer2");
let player1Round = document.getElementById("player1Round");
let player2Round = document.getElementById("player2Round");

diceRoll.addEventListener("click", (event) => {
  event.preventDefault();
  throwDice();
});

const throwDice = () => {
  let diceNumber = Math.floor(Math.random() * 6 + 1);

  palyerRound(diceNumber);

  switch (diceNumber) {
    case 1:
      diceImage.src = "Images/Alea_1.png";
      diceResult.appendChild("diceImage");
      break;
    case 2:
      diceImage.src = "Images/Alea_2.png";
      diceResult.appendChild("diceImage");
      break;
    case 3:
      diceImage.src = "Images/Alea_3.png";
      diceResult.appendChild("diceImage");
      break;
    case 4:
      diceImage.src = "Images/Alea_4.png";
      diceResult.appendChild("diceImage");
      break;
    case 5:
      diceImage.src = "Images/Alea_5.png";
      diceResult.appendChild("diceImage");
      break;
    case 6:
      diceImage.src = "Images/Alea_6.png";
      diceResult.appendChild("diceImage");
      break;
  }
};

let palyerRound = (diceNumber) => {
  if (getComputedStyle(player1Round).getPropertyValue("display") === "inline") {
    if (diceNumber === 1) {
      let round = 0;
      roundPlayer1.innerHTML = round.toString();
      player1Round.style.display = "none";
      player2Round.style.display = "inline";
    } else {
      let round = parseInt(roundPlayer1.innerHTML) + diceNumber;
      roundPlayer1.innerHTML = round.toString();
    }
  }else if (getComputedStyle(player2Round).getPropertyValue("display") === "inline") {
    if (diceNumber === 1) {
      let round = 0;
      roundPlayer2.innerHTML = round.toString();
      player2Round.style.display = "none";
      player1Round.style.display = "inline";
    } else {
      let round = parseInt(roundPlayer2.innerHTML) + diceNumber;
      roundPlayer2.innerHTML = round.toString();
    }
  }
};
