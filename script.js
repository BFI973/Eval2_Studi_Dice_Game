const diceRoll = document.getElementById("diceRoll");
const hold = document.getElementById("hold");
const newGame = document.getElementById("newGame");
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
      diceResult.appendChild(diceImage);
      break;
    case 2:
      diceImage.src = "Images/Alea_2.png";
      diceResult.appendChild(diceImage);
      break;
    case 3:
      diceImage.src = "Images/Alea_3.png";
      diceResult.appendChild(diceImage);
      break;
    case 4:
      diceImage.src = "Images/Alea_4.png";
      diceResult.appendChild(diceImage);
      break;
    case 5:
      diceImage.src = "Images/Alea_5.png";
      diceResult.appendChild(diceImage);
      break;
    case 6:
      diceImage.src = "Images/Alea_6.png";
      diceResult.appendChild(diceImage);
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
  } else if (
    getComputedStyle(player2Round).getPropertyValue("display") === "inline"
  ) {
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

hold.addEventListener("click", (event) => {
  event.preventDefault();

  if (getComputedStyle(player1Round).getPropertyValue("display") === "inline") {
    let roundPoint = parseInt(roundPlayer1.innerHTML);
    let totalPoint = parseInt(globalPlayer1.innerHTML);
    totalPoint += roundPoint;
    globalPlayer1.innerHTML = totalPoint.toString();
    roundPlayer1.innerHTML = "0";
    player1Round.style.display = "none";
    player2Round.style.display = "inline";
  } else if (
    getComputedStyle(player2Round).getPropertyValue("display") === "inline"
  ) {
    let roundPoint = parseInt(roundPlayer2.innerHTML);
    let totalPoint = parseInt(globalPlayer2.innerHTML);
    totalPoint += roundPoint;
    globalPlayer2.innerHTML = totalPoint.toString();
    roundPlayer2.innerHTML = "0";
    player2Round.style.display = "none";
    player1Round.style.display = "inline";
  }

  if (parseInt(globalPlayer1.innerHTML) >= 100) {
    alert("Félicitation, le joueur 1 a gagné !!!!");
    let replay = confirm("Voulez vous rejouer ?");

    if (replay) {
      newPart();
    } else {
      alert("Au revoir et à bientôt");
    }
  } else if (parseInt(globalPlayer2.innerHTML) >= 100) {
    alert("Félicitation, le joueur 2 a gagné !!!!");
    let replay = confirm("Voulez vous rejouer ?");

    if (replay) {
      newPart();
    } else {
      alert("Au revoir et à bientôt");
    }
  }
});

const newPart = () => {
  let party = confirm("Une nouvelle partie remet les compteurs à zero !");

  if (party) {
    location.reload();
  }
};

newGame.addEventListener("click", newPart);
