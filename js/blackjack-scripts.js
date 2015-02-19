var Card = {
  suit: "",
  rank: "",
  ace?: false,
  face?: false
}

var Deck = {
  var suits = ["s", "h", "c", "d"];
  var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  for (i = 0; i < 4; i++) {
    for(n = 0; n < 13; n++) {

      var newCard = Object.create(Card);
      newCard.suit = suits[i];
      newCard.rank = ranks[n];
      if (n > 8) {
        newCard.face? = true;
      } else if (n === 0) {
        newCard.ace? = true;
      }
    }
  }

}

var Game = {
  #all the actions inherent to blackjack as methods
}
