class Card {
  constructor(suit, rank, score) {
    this.suit = suit;
    this.rank = rank;
    this.score = score;
  }
}
class Deck {
  constructor() {
    this.cards = []
    this.createDeck()
  }
}

class GameOfWar {
  constructor() {
    this.p1 = []
    this.p2 = []
    this.pile = []
    this.gameSetup()
  }
  gameSetup() {
    const { cards } = new Deck()
    this.p1.push(...cards.splice(0, 26))
    this.p2.push(...cards)
  }

  playGame() {
    while (this.p1.length > 0 && this.p2.length > 0) {
      let p1card = this.p1.pop()
      let p2card = this.p2.pop()

      if (p1card.score === p2card.score) {
        this.pile.push(p1card, p2card)
        this.war()
      } else if (p1card.score > p2card.score) {
        this.p1.unshift(p2card, p1card, ...this.pile.splice(0))
        console.log("Player 1 wins the round")
      } else {
        this.p2.unshift(p1card, p2card, ...this.pile.splice(0))
        console.log("Player 2 wins the round")
      }
    }

  }

  war() {
    console.log("WAR!!!!!!")
    if (this.p1.length < 4 || this.p2.length < 4) {
      if (this.p1.length < 4) {
        this.p2.push(...this.p1.splice(0), ...this.pile.splice(0))
      } else {
        this.p1.push(...this.p2.splice(0), ...this.pile.splice(0))

      }
    } else {
      let p1WarPile = this.p1.splice(- 3, 3)
      let p2WarPile = this.p2.splice(-3, 3)
      this.pile.push(...p1WarPile, ...p2WarPile)
    }
  }
}

const game = new GameOfWar()
game.playGame()
