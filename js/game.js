// javascript library for simple game development
var HasKey = false;


// KK: Screen B Optie 2 & 3
function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('button1');
	opt1.setAttribute("onClick", "javascript:Level1();");

	document.getElementById('level_title').innerHTML = 'De kooi lijkt in een kelder te staan, op de deur zit een oud slot en er staat een klein raampje open.';
	document.getElementById('level_image').src = 'img/b.jpg';

	button1.style.display = "none";
	button2.style.display = "inline-block";
	button3.style.display = "inline-block";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	glasses.style.display="none";
	}

// KK: Screen C Optie 4 & 5
function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('button2');
	opt1.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = 'Er lijkt niet te worden gereageerd, je inspecteer toch maar het slot en ziet dat het er kwetsbaar uit ziet, er zitten ook een paar spijlen los.';
	document.getElementById('level_image').src = 'img/cd.jpg';

	button2.style.display = "none";
	button3.style.display = "none";
	button4.style.display = "inline-block";
	button5.style.display = "inline-block";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen D Optie 6 & 7
function Level3() {
	console.log("Level3()");

	var opt1 = document.getElementById('button3');
	opt1.setAttribute("onClick", "javascript:Level3();");

	document.getElementById('level_title').innerHTML = 'Het slot ziet er kwetsbaar uit, er zitten ook een paar spijlen los.';
	document.getElementById('level_image').src = 'img/cd.jpg';

	button2.style.display = "none";
	button3.style.display = "none";
	button6.style.display = "inline-block";
	button7.style.display = "inline-block";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen E optie 8 & 9
function Level4() {
	console.log("Level4()");

	var opt1 = document.getElementById('button4');
	opt1.setAttribute("onClick", "javascript:Level4();");

	document.getElementById('level_title').innerHTML = 'Je probeert langs de spijlen te kruipen maar haalt je aan een van de spijlen open. De deur van de kelder vliegt open en een bewaker staat in de opening.';
	document.getElementById('level_image').src = 'img/ef.png';

	button4.style.display = "none";
	button5.style.display = "none";
	button8.style.display = "inline-block";
	button9.style.display = "inline-block";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen F optie 9 & 10
function Level5() {
	console.log("Level5()");

	var opt1 = document.getElementById('button5');
	opt1.setAttribute("onClick", "javascript:Level5();");

	document.getElementById('level_title').innerHTML = 'Je hebt het slot succesvol gesloopt en stapt uit de cel, op dat moment vliegt de deur van de kelder open en een bewaker staat in de opening.';
	document.getElementById('level_image').src = 'img/ef.png';

	button4.style.display = "none";
	button5.style.display = "none";
	button9.style.display = "inline-block";
	button10.style.display = "inline-block";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen G optie 11 & 12
function Level6() {
	console.log("Level5()");

	var opt1 = document.getElementById('button6');
	opt1.setAttribute("onClick", "javascript:Level6();");

	document.getElementById('level_title').innerHTML = 'Je probeert langs de spijlen te kruipen maar haalt je aan een van de spijlen open. Je loopt door de hal en ziet een bewaker slapend in zijn stoel.';
	document.getElementById('level_image').src = 'img/gh.jpg';

	button6.style.display = "none";
	button7.style.display = "none";
	button11.style.display = "inline-block";
	button12.style.display = "inline-block";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}

// KK: Screen H optie 13 & 14
function Level7() {
	console.log("Level6()");

	var opt1 = document.getElementById('button7');
	opt1.setAttribute("onClick", "javascript:Level7();");

	document.getElementById('level_title').innerHTML = 'Je hebt het slot succesvol gesloopt en stapt uit de cel, je loopt door de hal en ziet een bewaker slapend in zijn stoel.';
	document.getElementById('level_image').src = 'img/gh.jpg';

	button6.style.display = "none";
	button7.style.display = "none";
	button13.style.display = "inline-block";
	button14.style.display = "inline-block";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}

// KK: Screen I optie 15 & 16
function Level8() {
	console.log("Level8()");

	var opt1 = document.getElementById('button8');
	opt1.setAttribute("onClick", "javascript:Level8();");

	document.getElementById('level_title').innerHTML = 'De bewaker valt bewusteloos op de grond.';
	document.getElementById('level_image').src = 'img/i.jpg';

	button8.style.display = "none";
	button9.style.display = "none";
	button15.style.display = "inline-block";
	button16.style.display = "inline-block";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}
// KK: Screen J Af
function Level9() {
	console.log("Level9()");

	var opt1 = document.getElementById('button9');
	opt1.setAttribute("onClick", "javascript:Level9();");

	document.getElementById('level_title').innerHTML = 'Je valt de bewaker aan maar zonder wapen kon je hem niet overmeesteren. De bewaker pakt een mes en steek je neer.';
	document.getElementById('level_image').src = 'img/jkl.jpg';
	button8.style.display = "none";
	button9.style.display = "none";
	button10.style.display = "none";
	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}
// KK: Screen K Af
function Level10() {
	console.log("Level10()");

	var opt1 = document.getElementById('button10');
	opt1.setAttribute("onClick", "javascript:Level10();");

	document.getElementById('level_title').innerHTML = 'Je probeert een van de spijlen af te breken maar voor dat je lukt heeft de bewaker je al ingehaald, je voelt van achter dat de bewaker een mes in je steekt, dan word alles zwart.';
	document.getElementById('level_image').src = 'img/jkl.jpg';

	button9.style.display = "none";
	button10.style.display = "none";
	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}

// KK: Screen L Af
function Level11() {
	console.log("Level11()");

	var opt1 = document.getElementById('button11');
	opt1.setAttribute("onClick", "javascript:Level11();");

	document.getElementById('level_title').innerHTML = 'Je valt de bewaker aan maar voelt een steek in je zij, de spijlen hebben je te veel open gehaald. De bewaker overmeestert je, plots voel je een scherpe steek terwijl een voorwerp je zij doordringt. Dan word alles zwart voor je ogen.';
	document.getElementById('level_image').src = 'img/jkl.jpg';

	button11.style.display = "none";
	button12.style.display = "none";
	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}

// KK: Screen M optie 17 & 18
function Level12() {
	console.log("Level2()");

 	var opt1 = document.getElementById('button12');
 	opt1.setAttribute("onClick", "javascript:Level12();");

 	document.getElementById('level_title').innerHTML = 'Zo stil mogelijk sluip je langs de bewaker. Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
 	document.getElementById('level_image').src = 'img/mnopq.jpg';

	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
	button11.style.display = "none";
	button12.style.display = "none";
	button17.style.display = "inline-block";
	button18.style.display = "inline-block";
	button27.style.display = "none";
	button32.style.display="inline-block"

	button17.onclick = function(){
		if(HasKey){
			Level17();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display="none";
}

// KK: Screen N optie 19 & 20
function Level13() {
	console.log("Level13()");

	var opt1 = document.getElementById('button13');
	opt1.setAttribute("onClick", "javascript:Level13();");

	document.getElementById('level_title').innerHTML = 'Met al je kracht val je de slapende bewaker aan, je slaat hem zo hard dat hij dood op de grond valt. Je voelt aan het slot van de deur maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	button13.style.display = "none";
	button14.style.display = "none";
	button19.style.display = "inline-block";
	button20.style.display = "inline-block";
	button28.style.display = "none";
	button33.style.display = "inline-block";
	button29.style.display = "none";
	button19.onclick = function(){
		if(HasKey){
			Level19();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display ="none";
}

// KK: Screen O optie 21 & 22
function Level14() {
	console.log("Level14()");

	var opt1 = document.getElementById('button14');
	opt1.setAttribute("onClick", "javascript:Level14();");

	document.getElementById('level_title').innerHTML = 'Zo stil mogelijk sluip je langs de bewaker. Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';

	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	button13.style.display = "none";
	button14.style.display = "none";
	button15.style.display = "none";
	button21.style.display = "inline-block";
	button22.style.display = "inline-block";
	button29.style.display = "none";
	button34.style.display = "inline-block";
	button21.onclick = function(){
		if(HasKey){
			Level21();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display ="none";
}

// KK: Screen P optie 23 & 24
function Level15() {
	console.log("Level15()");

		var opt1 = document.getElementById('button15');
		opt1.setAttribute("onClick", "javascript:Level15();");

		document.getElementById('level_title').innerHTML = 'Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
		document.getElementById('level_image').src = 'img/mnopq.jpg';
		life.style.display = "none";
		lifehurt.style.display="inline-block";
		over.style.display = "none";
		button15.style.display = "none";
		button16.style.display = "none";
		button23.style.display = "inline-block";
		button24.style.display = "inline-block";
		button30.style.display = "none";
		button36.style.display = "inline-block";
		button23.onclick = function(){
			if(HasKey){
				Level23();
			} else {
				alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
			}
		}
		key.style.display ="none";
	}
// KK: Screen Q optie 25 & 26
function Level16() {
	console.log("Level16()");

	var opt1 = document.getElementById('button16');
	opt1.setAttribute("onClick", "javascript:Level16();");

	document.getElementById('level_title').innerHTML = 'Je voelt aan het slot maar deze zit op slot, misschien heeft de bewaker een sleutel of ligt er een sleutel in de kelder.';
	document.getElementById('level_image').src = 'img/mnopq.jpg';
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
	button15.style.display = "none";
	button16.style.display = "none";
	button25.style.display = "inline-block";
	button26.style.display = "inline-block";
	button31.style.display = "none";
	button35.style.display = "inline-block";
	button25.onclick = function(){
		if(HasKey){
			Level25();
		} else {
			alert('Je hebt de sleutels nodig om dit slot te kunnen openen.');
		}
	}
	key.style.display ="none";
}
// KK: Screen R af
function Level17() {
	console.log("Level17()");

	var opt1 = document.getElementById('button17');
	opt1.setAttribute("onClick", "javascript:Level17();");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur.  Je ziet dat er buiten politie auto’s staan die naar je toe rennen en een deken om je heen slaan, je bent eindelijk veilig.';
	document.getElementById('level_image').src = 'img/rvz.jpg';

	button17.style.display = "none";
	button18.style.display = "none";
	button32.style.display = "none";
	key.style.display ="none";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}
// KK: Screen S optie 27
function Level18() {
	console.log("Level18()");

	var opt1 = document.getElementById('button18');
	opt1.setAttribute("onClick", "javascript:Level18();");

	document.getElementById('level_title').innerHTML = 'Kijk of je een sleutel ziet of ga terug naar waar de bewaker is.';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	button17.style.display = "none";
	button18.style.display = "none";
	button27.style.display = "inline-block";
	button32.style.display = "none";
	key.style.display ="none";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
}
// KK: Screen T AF
function Level19() {
	console.log("Level19()");

	var opt1 = document.getElementById('button19');
	opt1.setAttribute("onClick", "javascript:Level19();");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur. Je ziet dat er buiten politie auto’s staan. De politie agenten houden je onder schot omdat je onder het bloed van de bewaker zit, je probeert nog uit te leggen dat je ontvoerd was maar word toch neergeschoten door een van de agenten.';
	document.getElementById('level_image').src = 'img/tx.jpg';

	button19.style.display = "none";
	button20.style.display = "none";
	button33.style.display = "none";
	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}
// KK: Screen U optie 28
function Level20() {
	console.log("Level20()");

	var opt1 = document.getElementById('button20');
	opt1.setAttribute("onClick", "javascript:Level20();");

	document.getElementById('level_title').innerHTML = 'In de cel zie je geen sleutel, toch maar kijken of de bewaker een sleutel heeft.';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	button19.style.display = "none";
	button20.style.display = "none";
	button28.style.display = "inline-block";
	button33.style.display = "none";
	key.style.display="none";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
}
// KK: Screen V optie AF
function Level21() {
	console.log("Level21()");

	var opt1 = document.getElementById('button21');
	opt1.setAttribute("onClick", "javascript:Level21();");

	document.getElementById('level_title').innerHTML = 'Met de sleutel open je de deur. Je ziet dat er buiten politie auto’s staan die naar je toe rennen en een deken om je heen slaan, je bent eindelijk veilig.';
	document.getElementById('level_image').src = 'img/rvz.jpg';

	button21.style.display = "none";
	button22.style.display = "none";
	button34.style.display = "none";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
}
// KK: Screen W optie 29
function Level22() {
	console.log("Level22()");

	var opt1 = document.getElementById('button22');
	opt1.setAttribute("onClick", "javascript:Level22();");

	document.getElementById('level_title').innerHTML = 'In de cel zie je geen sleutel, toch maar kijken of de bewaker een sleutel heeft.';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	button13.style.display = "none";
	button21.style.display = "none";
	button22.style.display = "none";
	button29.style.display = "inline-block";
	button34.style.display = "none";
	key.style.display="none";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
}
// KK: Screen X AF
function Level23() {
	console.log("Level23()");

	var opt1 = document.getElementById('button23');
	opt1.setAttribute("onClick", "javascript:Level23();");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur. Je ziet dat er buiten politie auto’s staan. De politie agenten houden je onder schot omdat je onder het bloed van de bewaker zit, je probeert nog uit te leggen dat je ontvoerd was maar word toch neergeschoten door een van de agenten.';
	document.getElementById('level_image').src = 'img/tx.jpg';

	button23.style.display = "none";
	button24.style.display = "none";
	button36.style.display = "none";
	life.style.display = "none";
	lifehurt.style.display="none";
	over.style.display = "inline-block";
}
// KK: Screen Y optie 30
function Level24() {
	console.log("Level24()");

	var opt1 = document.getElementById('button24');
	opt1.setAttribute("onClick", "javascript:Level24();");

	document.getElementById('level_title').innerHTML = 'In de cel zie je geen sleutel, toch maar kijken of de bewaker een sleutel heeft.';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	button23.style.display = "none";
	button24.style.display = "none";
	button30.style.display = "inline-block";
	button36.style.display = "none";
	key.style.display="none";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
    key.style.display ="none";
}
}
// KK: Screen Z AF
function Level25() {
	console.log("Level25()");

	var opt1 = document.getElementById('button25');
	opt1.setAttribute("onClick", "javascript:Level25();");

	document.getElementById('level_title').innerHTML = 'Met de sleutel die je in de cel vond open je de deur.  Je ziet dat er buiten politie auto’s staan die naar je toe rennen en een deken om je heen slaan, je bent eindelijk veilig.';
	document.getElementById('level_image').src = 'img/rvz.jpg';

	button25.style.display = "none";
	button26.style.display = "none";
	button35.style.display = "none";
	life.style.display = "none";
	lifehurt.style.display="inline-block";
	over.style.display = "none";
}
// KK: Screen AA optie 31
function Level26() {
	console.log("Level26()");

	var opt1 = document.getElementById('button26');
	opt1.setAttribute("onClick", "javascript:Level26();");

	document.getElementById('level_title').innerHTML = 'In de cel zie je geen sleutel, toch maar kijken of de bewaker een sleutel heeft.';
	document.getElementById('level_image').src = 'img/suwyaa.jpg';

	button25.style.display = "none";
	button26.style.display = "none";
	button31.style.display = "inline-block";
	button35.style.display = "none";
	key.style.display = "none";
	life.style.display = "inline-block";
	lifehurt.style.display="none";
	over.style.display = "none";
	key.style.display ="inline-block";
	var opt3 = document.getElementById('key');

	opt3.onclick = function(){
		HasKey = true;
		key.style.display ="none";
	}
	if (HasKey == true) {
		key.style.display ="none";
}
}
// KK: Terug naar M
function Level27() {
Level12();
}
// KK: Terug naar N
function Level28() {
Level13();
}
// KK: Terug naar O
function Level29() {
Level14();
}
// KK: Terug naar P
function Level30() {
Level15();
}
// KK: Terug naar Q
function Level31() {
	Level16();
	}
	// KK: Screen AB optie 27
	function Level32() {
		console.log("Level32()");

		var opt1 = document.getElementById('button32');
		opt1.setAttribute("onClick", "javascript:Level32();");

		document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
		document.getElementById('level_image').src = 'img/gh.jpg';

		button17.style.display = "none";
		button18.style.display = "none";
		button27.style.display = "inline-block";
		button32.style.display = "none";
		life.style.display = "none";
		lifehurt.style.display="inline-block";
		over.style.display = "none";
	}
	// KK: Screen AC optie 28
	function Level33() {
		console.log("Level33()");

		var opt1 = document.getElementById('button33');
		opt1.setAttribute("onClick", "javascript:Level33();");

		document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
		document.getElementById('level_image').src = 'img/gh.jpg';

		button19.style.display = "none";
		button20.style.display = "none";
		button28.style.display = "inline-block";
		button33.style.display = "none";
		life.style.display = "inline-block";
		lifehurt.style.display="none";
		over.style.display = "none";
	}

	// KK: Screen AD optie 29
	function Level34() {
		console.log("Level34()");

		var opt1 = document.getElementById('button34');
		opt1.setAttribute("onClick", "javascript:Level34();");

		document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
		document.getElementById('level_image').src = 'img/gh.jpg';

		button13.style.display = "inline-block";
		button21.style.display = "none";
		button22.style.display = "none";
		button29.style.display = "inline-block";
		button34.style.display = "none";
		life.style.display = "inline-block";
		lifehurt.style.display="none";
		over.style.display = "none";
	}
	// KK: Screen AE optie 15 & 29
	function Level35() {
		console.log("Level35()");

		var opt1 = document.getElementById('button35');
		opt1.setAttribute("onClick", "javascript:Level35();");

		document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
		document.getElementById('level_image').src = 'img/i.jpg';

		button15.style.display = "inline-block";
		button25.style.display = "none";
		button26.style.display = "none";
		button29.style.display = "inline-block";
		button35.style.display = "none";
		life.style.display = "inline-block";
		lifehurt.style.display="none";
		over.style.display = "none";
	}
	// KK: Screen AF optie 30
	function Level36() {
		console.log("Level36()");

		var opt1 = document.getElementById('button36');
		opt1.setAttribute("onClick", "javascript:Level36();");

		document.getElementById('level_title').innerHTML = 'Zoek de sleutel of ga terug naar de deur..';
		document.getElementById('level_image').src = 'img/i.jpg';

		button23.style.display = "none";
		button24.style.display = "none";
		button30.style.display = "inline-block";
		button36.style.display = "none";
		life.style.display = "inline-block";
		lifehurt.style.display="none";
		over.style.display = "none";
	}
