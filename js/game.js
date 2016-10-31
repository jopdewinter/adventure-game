// Shortcuts
function get(id)
{
	return document.getElementById(id)
}

//Levels
function start()
{
	console.log("start()");
	get("tooltiptext").innerHTML = "Uitleg:<br><br>Je zit s'avonds thuis tv te kijken. Er wordt bij je ingebroken. Door het spel heen krijg je verschillende keuzes en je moet de goede kiezen.";
}

function level1()
{
	document.body.style.background = "url(./img/tv.jpg)";
	document.body.style.backgroundSize = "100%";
	get("title").style.display = "none";
	get("tooltip").style.display = "none";
	get("option1").style.display = "none";
	get("level1tekst").style.display = "inherit"
	get("option2").style.display = "inherit"
}

function level2()
{
	
}