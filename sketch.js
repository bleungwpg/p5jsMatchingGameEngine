var gridOfPhotosBackEnd;
var gridOfPhotosPlayerSelection;
var maxX;
var maxY;
var selectionCounter;
var lock;
var finalFrameCount;
var lockFrame;
var alpha1;


function preload()
{

}

function setup()
{
	createCanvas(800,600);

	frameRate(30);
	finalFrameCount = 0;
	lockFrame = false;
	alpha1 = 0;

	lock = false;
	setupTables();
}

function setupTables()
{
	maxX = 5;
	maxY = 10;

	selectionCounter = new Array(6);

	for (var x = 0; x < 5; x++)
	{
		selectionCounter[x]	= 0;
	}


	// setup grid structure
	// --------------------------------------
	gridOfPhotosPlayerSelection = new Array(maxX);
	gridOfPhotosBackEnd = new Array(maxX);
	var randomNumberCollection = new Array(maxX*maxY);

	for (var x = 0, r = 0; x < maxX*maxY; r++)
	{
		randomNumberCollection[x] = r;
		x++;
		randomNumberCollection[x] = r;
		x++;
	}


	for (var r = 0; r < maxX; r++)
	{
		gridOfPhotosBackEnd[r] = new Array(maxY);
		gridOfPhotosPlayerSelection[r] = new Array(maxY);
	}

	for (var r = 0; r < maxX; r++)
	{
		for (var c = 0; c < maxY; c++)
		{
			gridOfPhotosBackEnd[r][c] = 0;
			gridOfPhotosPlayerSelection[r][c] = 0;
		}		
	}


	var notFinished = true;
	var nextR = 0;
	var nextC = 0;
	while (notFinished)
	{	
		var temp = int(random(0,randomNumberCollection.length));
		var countMax = 0;

	
		gridOfPhotosBackEnd[nextR][nextC] = randomNumberCollection[temp];
		console.log(nextR+" "+nextC+" "+maxX+" "+maxY+" "+temp);

		nextC++;
		if (nextC == maxY)
		{
			nextR++;
			nextC = 0;
		}
		
		randomNumberCollection.splice(temp,1);
		
	
		if (randomNumberCollection.length == 0)
		{
			notFinished = false;		
		}

	}
	// --------------------------------------

}


// checks if cards match or not
function doesItMatch()
{
	for (var r = 0; r < maxX; r++)
	{
		for (var c = 0; c < maxY; c++)
		{
			if (mouseX > 25+50*c && mouseX < 25+50*c+50 && mouseY > r*50+25 && mouseY < r*50+25+50 && mouseIsPressed == true && !lock)
			{
				lock = true;
				gridOfPhotosPlayerSelection[r][c] = 1;
				selectionCounter[0]++;
				if (selectionCounter[0] == 1)
				{				
					selectionCounter[1] = r;
					selectionCounter[2] = c;
				}
				else
				{
					selectionCounter[3] = r;
					selectionCounter[4] = c;					
				}
			}
			// shows the cards
			// 0 - default card
			if (gridOfPhotosPlayerSelection[r][c] == 0)
			{
				fill(200,0,0);
				rect(25+50*c,r*50+25,50,50);					
			}
			// 1 - flipped card
			else if (gridOfPhotosPlayerSelection[r][c] == 1)
			{
				fill(0,200,0);
				rect(25+50*c,r*50+25,50,50);										
			}
			// 2 - card is removed

			// show numbers (this can be removed when product is ready)			
			fill(50,50,50);
			text(gridOfPhotosBackEnd[r][c],50+50*c,r*50+50);
		}		
	}	

	// check if they have selected 2 items and reset
	if (selectionCounter[0] == 2)
	{
		// are the cards a match?
		if (gridOfPhotosBackEnd[selectionCounter[1]][selectionCounter[2]] == gridOfPhotosBackEnd[selectionCounter[3]][selectionCounter[4]] &&
			(selectionCounter[1] != selectionCounter[3] || selectionCounter[2] != selectionCounter[4]))
		{
			match = true;
			lockFrame = false;
			// remove cards
			gridOfPhotosPlayerSelection[selectionCounter[1]][selectionCounter[2]] = 2;
			gridOfPhotosPlayerSelection[selectionCounter[3]][selectionCounter[4]] = 2;

		}
		else
		{
			// turn cards back to red
			gridOfPhotosPlayerSelection[selectionCounter[1]][selectionCounter[2]] = 0;
			gridOfPhotosPlayerSelection[selectionCounter[3]][selectionCounter[4]] = 0;

		}



		for (var x = 0; x < 5; x++)
		{
			selectionCounter[x] = 0;
		}
	}
	
}

// function that handles the match message
function showMatch()
{
	if (match == true)
	{
		if (lockFrame == false)
		{
			alpha1 = 255;
			lockFrame = true;
			finalFrameCount = frameCount + 120;
		}
		fill(255,255,255,alpha1);
		alpha1--;
		text("Match!",600,100);
		if (frameCount > finalFrameCount)
		{
			match = false;
			lockFrame = false;
		}

	}
}

function draw()
{
	background(0,0,0);

	fill(255,255,255);

	doesItMatch();
	showMatch();
	

}

function mouseReleased()
{
	lock = false;
}

