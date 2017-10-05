$(document).ready(function(){
	// BlackJack deal function
	// Create deck function
	// Shuffle deak function

	var playersHand = [];
	var dealersHand = [];
	const freshDeck = createDeck();
	// slice with no parameters starts at the 0 element and -1 element to end
	var theDeck = freshDeck.slice();


	function createDeck() {
		var newDeck = [];
		const suits = ['h', 's', 'd', 'c'];
		for(let s = 0; s < suits.length; s++){
			for(let c = 1; c <= 13; c++){
				newDeck.push(c+suits[s]);
			}
		}
		// console.log(newDeck);
		return newDeck;
	}
	function shuffleDeck() {
		for(let i = 0; i < 50000; i++){
			var rand1 = Math.floor(Math.random() * theDeck.length);
			var rand2 = Math.floor(Math.random() * theDeck.length);
			
			var card1Defender = theDeck[rand1];

			theDeck[rand1] = theDeck[rand2];
			theDeck[rand2] = card1Defender;
		}
		console.log(theDeck)
	}
	

});