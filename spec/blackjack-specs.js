describe("Deck", function() {
  describe("populate", function() {
    it("creates an array of an entire population of cards", function() {
      var testDeck = Object.create(Deck);
      testDeck.populate();
      expect(testDeck.cards.length).to.equal(52);
    });
  });
  describe("shuffle", function() {
    it("creates shuffles the array of cards", function() {
      var testDeck = Object.create(Deck);
      testDeck.populate();
      testDeck.shuffle();
      expect(["Spades", "Hearts", "Clubs", "Diamonds"]).to.contain(testDeck.cards[51].suit);
    });
  });
});
