describe("Deck", function() {
  it("creates an array of an entire population of cards", function() {
    var testDeck = Object.create(Deck);
    testDeck.populate();
    expect(testDeck.cards.forEach(function(card){
      return card.suit + card.rank;
    })).to.equal("bullshit")
  });
});
