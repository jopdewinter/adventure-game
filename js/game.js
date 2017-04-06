// javascript library for simple game development

document.getElementById('option1').innerHTML = 'Dit is keuze 1';
document.getElementById('level_title').innerHTML = 'Start het spelletje';

var HasKey = false;

// jquery variant
//$('#option1').html('Dit is keuze 1');


// https://www.youtube.com/watch?v=4ba1BqJ4S2M



function Level1() {
	console.log("Level1()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 1: optie 1';
	opt1.setAttribute("onClick", "javascript:Level2();");

	document.getElementById('level_title').innerHTML = 'Level 1';
	document.getElementById('level_image').src = 'img/level1.jpg';


	// only allow option 2 if user has a key in his inventory

	var opt2 = document.getElementById('option2');
	opt2.innerHTML = 'Level 1: optie 1';
	opt2.onclick = function(){
		if(HasKey){
			Level2();
		} else {
			alert('U dont haz key dumbass');
		}
	}

	var opt3 = document.getElementById('option3');

	opt3.onclick = function(){
		HasKey = true;
	}
}

function Level2() {
	console.log("Level2()");

	var opt1 = document.getElementById('option1');
	opt1.innerHTML = 'Level 2: optie 1';
	opt1.onClick = 'javascript:Level3();';

	document.getElementById('level_title').innerHTML = 'Level 2';
	document.getElementById('level_image').src = 'img/level2.jpg';
}
