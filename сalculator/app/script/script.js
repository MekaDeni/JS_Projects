var calculator = document.getElementById('calculator'),
	onButton = document.getElementById('onButton'),
	inputResult = document.getElementById('inputResult'),
	buttonNum = document.getElementsByClassName('button-num'),
	sumButton = document.getElementById('sum'),
	resultSum = 0;
	numOnTable = '';

/*
	КНОПКА ВКЛ/ВЫКЛ
*/
onButton.addEventListener('click', function () {
	if (onButton.classList.contains('--onButton__off')) {
		onButton.classList.remove('--onButton__off');
		onButton.classList.add('--onButton__on');
		inputResult.innerHTML += 0;
	} else {
		onButton.classList.remove('--onButton__on');
		onButton.classList.add('--onButton__off');
		inputResult.innerHTML = "";
	}
});

/*
	КНОПКИ ЦИФР
*/

function clickNum(event) {
	if (onButton.classList.contains('--onButton__off')) {
		alert("Включите калькулятор");
	} else {
		inputResult.innerHTML = '';
		inputResult.innerHTML += numOnTable + event.target.innerHTML;
	}
}

for (var i=0; i<buttonNum.length; i++) {
	buttonNum[i].addEventListener('click', clickNum);
}

/*
	СУММА 
*/

sumButton.addEventListener('click', function () {
	resultSum += parseInt(inputResult.innerHTML);
	inputResult.innerHTML = '';
	inputResult.innerHTML = resultSum;
	console.log(resultSum);
});