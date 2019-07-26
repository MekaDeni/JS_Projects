'use-strict';

function startApp() {
	var buttonNum = document.getElementsByClassName('button-num');

	for(var i = 0; i < buttonNum.length; i++) {
		buttonNum[i].addEventListener('click', clickButtonNum);
	}
}

function clickButtonNum(e) {
	console.log('Нажали на =', e.target.innerHTML);
}

function clickButtonCommand() {
	// body...
}

document.addEventListener("DOMContentLoaded", startApp());