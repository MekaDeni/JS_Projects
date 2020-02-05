var calculator = document.getElementById('calculator'),
	onButton = document.getElementById('onButton'),
	inputResult = document.getElementById('inputResult'),
	buttonNum = document.getElementsByClassName('button-num'),
	sumButton = document.getElementById('sum'),
	resButton = document.getElementById('res'),
	compButton = document.getElementById('comp'),
	quotButton = document.getElementById('quot'),
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
	}
}

for (var i=0; i<buttonNum.length; i++) {
	buttonNum[i].addEventListener('click', clickNum);
}

/*
	СУММА 
*/

// функция вычисления 
function calculation(e) {
	if (e.target === sumButton) {
		resultSum += parseInt(inputResult.innerHTML);
	} else if (sign === 'res') {
		resultSum -= parseInt(inputResult.innerHTML);
	} else if (sign === 'comp') {
		resultSum *= parseInt(inputResult.innerHTML);
	} else if (sign === 'quot') {
		resultSum *= parseInt(inputResult.innerHTML);
	} else {
		inputResult.innerHTML = resultSum;
	}
	console.log(resultSum);
	inputResult.innerHTML = '';
}

sumButton.addEventListener('click', calculation);