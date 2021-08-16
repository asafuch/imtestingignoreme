function highestCardWins() {
  const options = [];
  for (let index = 2; index <= 10; index++) {
    options.push(index);
  }
  options.push("J", "Q", "K", "ACE");
  const firstCardIndex = Math.floor(Math.random() * 13);
  const SecondCardIndex = Math.floor(Math.random() * 13);

  const firstCard = {
    name: options[firstCardIndex],
    value: valueAlign(options[firstCardIndex]),
  };
  console.log("hello")
  const secondCard = {
    name: options[SecondCardIndex],
    value: valueAlign(options[SecondCardIndex]),
  };
  if (firstCard.value > secondCard.value) {
    return `${firstCard.name} is higher than ${secondCard.name} First Card is the winner`;
  } else if (secondCard.value > firstCard.value) {
    return `${secondCard.name} is higher than ${firstCard.name} second card is the winner`;
  } else if (firstCard.value === secondCard.value) {
    return `${secondCard.name} is equal to ${firstCard.name} Its A draw`;
  }
}
console.log(highestCardWins());

function valueAlign(card) {
  if (typeof card !== "number") {
    switch (card) {
      case "J":
        return 11;
      case "Q":
        return 12;
      case "K":
        return 13;
      case "ACE":
        return Infinity;
      default:
        break;
    }
  } else {
    return card;
  }
}
