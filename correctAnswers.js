var maxX;
var maxY;
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
	maxX = 5;
	maxY = 8;

	studentListOfCards = new Array(maxX * maxY);


	hiddenPhoto = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/hiddenCard.png');

	for (var i = 0; i < maxX * maxY; i++)
	{
		studentListOfCards[i] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card3B.png');
	}

	studentListOfCards[0] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1A.png');
	studentListOfCards[1] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card1B.png');
	studentListOfCards[2] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2A.png');
	studentListOfCards[3] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card2B.png');
	studentListOfCards[4] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card3A.png');
	studentListOfCards[5] = loadImage('https://bleungwpg.github.io/p5jsMatchingGameEngine/images/card3B.png');


}