var Card = {
  suit: "",
  rank: "",
  ace: false,
  face: false,
  showing: true,
  identity: function() {
    return this.suit + " of " + this.rank;
  }
};

var Deck = {
  cards: [],
  populate: function() {
    var suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
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
      var j = Math.round(Math.random() * i);
      var tempCard = this.cards[j];
      this.cards[j] = this.cards[i];
      this.cards[i] = tempCard;
    }
  }
};

var Player = {
  cards: [],
  total: function() {
    cards.forEach(function(card) {
      if (card.showing) {
        var tally = 0;
        if (card.face) {
          tally += 10;
        } else if (card.ace) {
          tally += 11;
          if (tally > 21) {
            tally -= 10;
          }
        } else {
          tally += parseInt(card.value);
        }
      }
    });
  }
}

var Game = {
  dealer: Object.create(Player),
  player: Object.create(Player),
  deck: Object.create(Deck),

  dealerHit: function() {
    this.dealer.cards.push(this.deck.shift);
  },
  playerHit: function() {
    this.player.cards.push(this.deck.shift);
  },
  gameSetup: function() {
    this.deck.populate();
    this.deck.shuffle();
    this.dealerHit;
    this.dealerHit;
    this.playerHit;
    this.playerHit;
    this.dealer.cards[0].showing = false;
  }
};

$(function() {
  var game = Object.create(Game);
  game.gameSetup();
  $(".dealer-total").text(game.dealer.total);
  $("#dealer-hand").append("<li><span class='hidden'>(Hole Card)</span></li>");
  $("#dealer-hand").append("<li>" + game.dealer.card[1].identity + "</li>");
  $("#player-hand").append("<li>" + game.player.card[0].identity + "</li>");
});
