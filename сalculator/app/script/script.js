var calculator = document.getElementById('calculator'),
	onButton = document.getElementById('onButton'),
	inputResult = document.getElementById('inputResult'),
	buttonNum = document.getElementsByClassName('button-num'),
	sumButton = document.getElementById('sum'),
	resultSum = 0,
	numOnTable = '',
	firtsClickValue = 0;

/*
	Проверка на первый ввод
*/

function firstClick (value) {
	if (value === 0) 
		return false;
	else 
		return true;
}

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
		firtsClickValue = 0;
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
		if (firtsClickValue === 0) {
			inputResult.innerHTML = '';
			firtsClickValue += 1
		}

		inputResult.innerHTML += numOnTable + event.target.innerHTML;
		console.log(inputResult.innerHTML);
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