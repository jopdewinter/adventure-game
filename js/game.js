//Variables
let key = false;
let removedMusic = false;

// Shortcuts
function get(id)
{
	return document.getElementById(id)
}

//Functions
function takeKey() 
{
	key = true;
	get("zaklamp").style.display = "none";
}

function keyCheck()
{
	if (key == true) {
		level4();
	} else {
		get("warning").innerHTML = "Je hebt nog geen sleutel blyat";
	}
}

//Levels
function onLoad()
{
	document.getElementById("option1").className = 'option1';
	get("option3").style.display = "none";
}

function level1()
{
	document.body.style.background = "url(./img/tv.jpg)";
	document.body.style.backgroundSize = "100%";
	get("title").style.display = "none";
	get("tooltip").style.display = "none";
	get("option1").style.display = "none";
	get("option2").style.display = "inherit";
	get("option2").setAttribute("onclick", "level2()");
	get("option2").innerHTML = "Verder";
	document.getElementById("music1").remove();
	get("srcmusic").setAttribute("src","./sounds/music.mp3");
	get("text").innerHTML = "Je zit een avondje tv te kijken tot plots het stroom uitvalt.";
}

function level2()
{	
	if (removedMusic === false) {
		document.getElementById("music").remove();
	}
	document.body.style.background = "url(./img/keuken.jpg)";
	document.body.style.backgroundSize = "100%";
	get("option2").style.display = "none";
	get("text").innerHTML = "Je wilt de kelder in om te kijken of je het stroom weer aan kan zetten, maar het is daar donker dus je hebt een zaklamp nodig.";
	get("option3").innerHTML = "Open lade";
	get("option3").style.display = "inherit";
	get("option2").style.display = "inherit";
	get("option2").innerHTML = "Ga naar kelder";
	get("sleutels").style.display = "none";
	get('option2').setAttribute("onclick", "keyCheck()");
	get('option3').setAttribute("onclick", "level3()");
	get("zaklamp").style.display = "none";
}	

function level3()
{	
	removedMusic = true;
	get("warning").innerHTML = "";
	document.body.style.background = "url(./img/lade.jpg)";
	document.body.style.backgroundSize = "100%";
	get("zaklamp").style.display = "inherit";
	get("option2").style.display = "none"
	get("sleutels").style.display = "inherit";
	get("zaklamp").setAttribute("onclick", "takeKey()");
	get("text").innerHTML = "Pak de zaklamp";
	get("option3").innerHTML = "Terug";
	get("option3").setAttribute("onclick", "level2()")
}

function level4() 
{
	console.log("hey");
}