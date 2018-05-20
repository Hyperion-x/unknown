/*Start styles of the site*/

var siteStyle = document.querySelector(':root');
var setStyle = function (colorName, color) {
	siteStyle.style.setProperty(colorName, color);
}
var red = document.querySelector('#red').onclick = function() {
	setStyle('--main-color', 'red');
	setStyle('--border-color', 'red');
	setStyle('--light-main-color', '#ff7878');
	setStyle('--button-hover-color', '#ff7878');
	setStyle('--opacity-color', '#ff000061');
	setStyle('--arrow-color', '#ff7878');
	setStyle('--background-slider', 'url(../img/back_slider_red.jpg)');
	setStyle('--background-image', 'url(../img/Subscribe_bg2_red.png)');	
	document.querySelector('#logo_phone').setAttribute('src', 'img/logo_phone_red.png');
}

var orange = document.querySelector('#orange').onclick = function() {
	setStyle('--main-color', 'orange');
	setStyle('--border-color', 'orange');
	setStyle('--light-main-color', '#ffcc70');
	setStyle('--button-hover-color', '#ffcc70');
	setStyle('--opacity-color', '#ffa5006b');
	setStyle('--arrow-color', '#ffcc70');
	setStyle('--background-slider', 'url(../img/back_slider_orange.jpg)');
	setStyle('--background-image', 'url(../img/Subscribe_bg2_orange.png)');
	document.querySelector('#logo_phone').setAttribute('src', 'img/logo_phone_orange.png');
}

var black = document.querySelector('#black').onclick = function() {
	setStyle('--main-color', 'linear-gradient(0deg, #9ac8dc47, #3f657114 -100%, #191d1f)');
	setStyle('--border-color', '#b4b7b8');
	setStyle('--light-main-color', 'linear-gradient(-361.8deg, #9ac8dc47, #3f657114 184%, #191d1f)');
	setStyle('--button-hover-color', '#0000007d');
	setStyle('--opacity-color', '#00000070');
	setStyle('--arrow-color', 'linear-gradient(0deg, #9ac8dc47, #3f657114 -100%, #191d1f)');
	setStyle('--background-slider', 'url(../img/black_slider.png)');
	setStyle('--background-image', 'url(../img/black_bg.png)');
	document.querySelector('#logo_phone').setAttribute('src', 'img/logo_phone2.png');	
}

/*var a = [red, orange, black];
for(i in a)	{
	console.log(i);
}
*/

/*End styles of the site*/


/* Start counter */
var counterSeconds = 60;
var counterMinutes = 60;
var counterHours = 24;
var counterDays = 5;

function days() {
	counterDays--;
	
	if(counterDays < 10) {
		document.querySelector('#days').innerHTML = '0' + counterDays;
	} else {
		document.querySelector('#days').innerHTML = counterDays;
	}

	if(counterDays===0) {
		counterDays = 5;
	}
}

function hours() {

	if(counterHours===24) {
		days();
	}

	counterHours--;
	
	if(counterHours < 10) {
		document.querySelector('#hours').innerHTML = '0' + counterHours;
	} else {
		document.querySelector('#hours').innerHTML = counterHours;
	}

	if(counterHours===0) {
		counterHours = 24;
	}
}

function minutes() {

	if(counterMinutes===60) {
		hours();
	}

	counterMinutes--;
	
	if(counterMinutes < 10) {
		document.querySelector('#minutes').innerHTML = '0' + counterMinutes;
	} else {
		document.querySelector('#minutes').innerHTML = counterMinutes;
	}

	if(counterMinutes===0) {
		counterMinutes = 60;	
	}
}

function seconds() {

	if(counterSeconds===60) {
		minutes();
	}

	counterSeconds--;
	
	if(counterSeconds < 10) {
		document.querySelector('#seconds').innerHTML = '0' + counterSeconds;
	} else {
		document.querySelector('#seconds').innerHTML = counterSeconds;
	}

	if(counterSeconds===0) {
		counterSeconds = 60;		
	}
}

setInterval(seconds,1000);

/* End counter */

/* Start scale*/
var images = document.querySelectorAll('img');

for(i in images) {
	if(i>2) {
		images[i].classList.add('scale');
	}
}
/*var acords = document.querySelectorAll('a');
var lists = document.querySelectorAll('li');



var scale = function(array) {
	for(i in array) {
	array[i].className = "scale";
	}
}

scale(images);

scale(lists);

scale(acords);*/










/* Start scale*/

