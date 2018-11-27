var maxX;
var maxY;
var maxMatch;
var widthOfCard;
var heightOfCard;
var studentListOfCards;

function setupStudentListOfCard()
{
	// starting variables you CAN AND SHOULD MODIFY
	// modify these values to change the size of your cards and playing field
	widthOfCard = 40;
	heightOfCard = 40;

	// NOTE: maxX * maxY cannot be an odd number otherwise you will not have an even number of tiles
	maxX = 4;
	maxY = 3;

	// maxMatch indicates how many cards you want the player to match
	// the default is 2 indicating you want the player to match 2 cards.
	maxMatch = 2;

	studentListOfCards = new Array(maxX * maxY);


	hiddenPhoto = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/hiddenCard.png');

	// remove this when you have all of your own cards listed
	// this fills all cards with the same image
	for (var i = 0; i < maxX * maxY; i++)
	{
		studentListOfCards[i] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card3B.png');
	}

	// you will want to add to the list below with your own card images
	// add all answers together so if you have a pair you want the player to match
	// put those in adjacent values
	// pairs
	
	studentListOfCards[0] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1A.png');
	studentListOfCards[1] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1B.png');
	studentListOfCards[2] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2A.png');
	studentListOfCards[3] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2B.png');
	studentListOfCards[4] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card3B.png');

/*
	// triples
	studentListOfCards[0] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1A.png');
	studentListOfCards[1] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1B.png');
	studentListOfCards[2] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1B.png');
	studentListOfCards[3] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2A.png');
	studentListOfCards[4] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2B.png');
	studentListOfCards[5] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2B.png');
	studentListOfCards[6] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card3B.png');
*/

}