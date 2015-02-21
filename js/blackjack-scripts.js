var Card = {
  suit: "",
  rank: "",
  ace: false,
  face: false
};

var Deck = {
  cards: [],
  populate: function() {
    var suits = ["s", "h", "c", "d"];
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for (var i = 0; i < 4; i++) {
      for(var n = 0; n < 13; n++) {
        var newCard = Object.create(Card);
        newCard.suit = suits[i];
        newCard.rank = ranks[n];
        if (n >= 9) {
          newCard.face = true;
        } else if (n === 0) {
          newCard.ace = true;
        }
        (this.cards).push(newCard);
      }
    }
  },
  shuffle: function() {
    for (var i = 52; i > 0; i--) {
      var j = Math.random(0, i - 1);
      var tempCard = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = tempCard;
    }
  }
};

// var Game = {
//   #all the actions inherent to blackjack as methods
// }
