var maxTime;
var resetTime;
var lastRecordedTime;
var finalCountdown;
var theFrameRate;


function setupTimer()
{
	theFrameRate = 30;
	frameRate(theFrameRate);

	// modify this for when you want to countdown from.
	maxTime = 2;
	resetTime = false;

}

// call this function to delay according to maxTime seconds
// if (delayTime() == -1)
function delayTime()
{
	if (resetTime == false)
	{
		finalCountdown = frameCount + maxTime*theFrameRate;
		resetTime = true;
	}
	else
	{
		if (frameCount > finalCountdown)
		{
			resetTime = false;
			return -1;
		}
		console.log(frameCount);
	}
	return 0;
}

function manageTime(x,y)
{
	if (resetTime == false)
	{
		resetTime = true;
		lastRecordedTime = frameCount + maxTime * theFrameRate;
	}
	else
	{
		if (frameCount >= lastRecordedTime)
		{
			resetTime = false;

			// uses function from health.js
			deductHealth(50);

			canvasID++;
			typingBox.value("");
		}
	}
	showTimeBar(50,500);

}

function showTimeBar(x,y)
{
	fill(255,255,255);
	rect(x,y,(lastRecordedTime - frameCount)*4,50);

	textSize(18);
	fill(0,0,0);
	var s = int((lastRecordedTime - frameCount) / theFrameRate + 1);
	text("Time Remaining: "+s,x+30,y+30);
	textSize(12);
}