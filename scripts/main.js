var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myTitle = document.querySelector('h1');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if( mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src', 'images/firefox-icon2.png');
	}else{
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

function selectName(){
	var myName = prompt('Please, enter your name');
	localStorage.setItem('name', myName);
	myTitle.innerHTML = "Hola, " + myName;
}

if(!localStorage.getItem('name')){
	selectName();
}else{
	var storedName = localStorage.getItem('name');
	myTitle.innerHTML = "Hola, " + storedName;
}

myButton.onclick = function(){
	selectName();
}