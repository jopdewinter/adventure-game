'use strict'

//Variables
let key = false;
let gloves = false;
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
		get("warning").innerHTML = "Je hebt nog geen zaklamp!";
		get("warning").style.display = "inherit";
	}
}

function takeGloves() 
{
	gloves = true;
	get("handschoenen").style.display = "none";
}

function glovesCheck()
{
	if (gloves == true) {
		level7();
	} else {
		get("warning").innerHTML = "Je hebt nog geen handschoenen!";
		get("warning").style.display = "inherit";
	}
}

//Levels
function leveldead()
{
	document.body.style.background = "url(./img/dead.png)";
	document.body.style.backgroundSize = "100%";
	get("licht").style.display = "none";
	get("text").style.display = "none";
	get("lichttext").style.display = "none";
	get("option2").style.display = "none";
	get("option3").innerHTML = "Probeer opnieuw";
	get("option3").setAttribute("onclick", "location.reload()");
	get("option3").style.display = "inherit";
	get("option4").style.display = "none";
	get("warning").style.display = "none";
}

function leveldead2()
{
	document.body.style.background = "url(./img/dead.png)";
	document.body.style.backgroundSize = "100%";
	get("text").innerHTML = "De dief had een pistool en schoot je neer.";
	get("option3").innerHTML = "Probeer opnieuw";
	get("option3").setAttribute("onclick", "location.reload()");
	get("option3").style.display = "inherit";
	get("option2").style.display = "none";
}

function onLoad()
{
	document.getElementById("option1").className = 'option1';
	get("option3").style.display = "none";
	get("warning").style.display = "none";
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
	get("warning").style.display = "none";
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
	document.body.style.background = "url(./img/keldertrap.jpg)";
	document.body.style.backgroundSize = "100%";
	get("text").style.display = "none";
	get("option2").style.display = "none";
	get("option3").style.display = "none";
	get("option2").innerHTML = "Verder";
	get("option2").setAttribute("onclick", "level5()");
	get("option2").style.display = "inherit";
}

function level5()
{
	document.body.style.background = "black";
	get("licht").style.display = "inherit";
	get("lichttext").innerHTML = "Je ziet dat het kastje is opengebroken en de stroom uitgeschakeld is. Je moet het weer aan zetten maar dat gaat niet zonder handschoenen, want anders krijg je een stroomschok.";
	get("lichttext").style.display = "inherit";
	get("option2").style.display = "inherit";
	get("option2").innerHTML = "Toch aan zetten zonder handschoenen";
	get("option2").setAttribute("onclick", "leveldead()");
	get("option3").innerHTML = "zoek handschoenen";
	get("option3").setAttribute("onclick", "level6()");
	get("option3").style.display = "inherit";
	get("option4").innerHTML = "aanzetten met handschoenen";
	get("option4").setAttribute("onclick", "glovesCheck()");
	get("option4").style.display = "inherit";
	get("handschoenen").style.display = "none";
}

function level6()
{
	document.body.style.background = "url(./img/opslaghandschoenen.jpg)"
	document.body.style.backgroundSize = "100%";
	get("licht").style.display = "none";
	get("lichttext").style.display = "none";
	get("option2").innerHTML = "Terug";
	get("option2").setAttribute("onclick", "level5()");
	get("option3").style.display = "none";
	get("handschoenen").style.display = "inherit";
	get("handschoenen").setAttribute("onclick", "takeGloves()");
	get("option4").style.display = "none";
	get("warning").style.display = "none";
}

function level7()
{
	document.body.style.background = "url(./img/opslaghandschoenen.jpg)";
	document.body.style.backgroundSize = "100%";
	get("text").innerHTML = "je hoort iemand in de keuken en gaat er naar toe.";
	get("text").style.display = "inherit";
	get("option2").innerHTML = "Verder";
	get("option2").setAttribute("onclick", "level8()");
	get("licht").style.display = "none";
	get("option3").style.display = "none";
	get("option4").style.display = "none";
	get("lichttext").style.display = "none";
}

function level8()
{
	document.body.style.background = "url(./img/lade.jpg)";
	document.body.style.backgroundSize = "100%";
	get("text").innerHTML = "Je kijkt in de la en ziet dat de auto sleutels gestolen zijn. Op dat moment hoor je iemand de voordeur uit rennen. Je hebt de keuze om achter de dief aan te rennen of de politie bellen.";
	get("option2").innerHTML = "Bel de politie";
	get("option2").setAttribute("onclick", "level9()");
	get("option3").innerHTML = "Ren achter de dief aan";
	get("option3").setAttribute("onclick", "leveldead2()");
	get("option3").style.display = "inherit";
}

function level9()
{
	document.body.style.background = "url(./img/voortuin.jpg)";
	document.body.style.backgroundSize = "100%";
	get("text").innerHTML = "De politie was snel gearriveerd en arresteerde de dief. Je hebt de juiste keuze's gemaakt en het spel uitgepeeld!";
	get("option2").innerHTML = "Speel opnieuw";
	get("option2").setAttribute("onclick", "location.reload()");
	get("option3").style.display = "none";
	get("politieauto1").style.display = "inherit";
	get("politieauto2").style.display = "inherit";
	get("dief").style.display = "inherit";
}