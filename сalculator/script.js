'use-strict';

function startApp() {
	var buttonNum = document.getElementsByClassName('button-num'),
		buttonCom = document.getElementsByClassName('button-com'),
		inputResult = document.getElementById('inputResult');

	for(var i = 0; i < buttonNum.length; i++) {
		buttonNum[i].addEventListener('click', clickButtonNum);
	}

	for(var i = 0; i < buttonCom.length; i++) {
		buttonCom[i].addEventListener('click', clickButtonCommand);
	}

	function clickButtonNum(e) {
		inputResult.innerHTML = +(inputResult.innerHTML + e.target.innerHTML);
		console.log('Нажали на =', e.target.innerHTML);
	}


	function clickButtonCommand(e) {
		console.log('В поле сейчас =', inputResult.innerHTML);
		inputResult.innerHTML = 0;
	}
}

document.addEventListener("DOMContentLoaded", startApp());