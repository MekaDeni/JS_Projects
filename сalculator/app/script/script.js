var calculator = document.getElementById('calculator'),
	onButton = document.getElementById('onButton'),
	inputResult = document.getElementById('inputResult'),
	buttonNum = document.getElementsByClassName('button-num'),
	sumButton = document.getElementById('sum'),
	resButton = document.getElementById('res'),
	compButton = document.getElementById('comp'),
	quotButton = document.getElementById('quot'),
	resultButton = document.getElementById('result'),
	resultSum = 0,
	sign = '',
	numOnTable = '',
	firtsClickNumValue = 0;
	firtsClickResValue = 0;

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
		firtsClickNumValue = 0;
		inputResult.innerHTML = "";
		resultSum = 0;
		console.clear();
	}
});

/*
	КНОПКИ ЦИФР
*/

function clickNum(event) {
	if (onButton.classList.contains('--onButton__off')) {
		alert("Включите калькулятор");
	} else {
		if (firtsClickNumValue === 0) {
			inputResult.innerHTML = '';
			firtsClickNumValue++;
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
	if (firtsClickResValue === 0) {
		firtsClickResValue++;
		resultSum = parseInt(inputResult.innerHTML);
		inputResult.innerHTML = '';

		// присваиваем текущий знак
		if (e.target === sumButton) sign = 'sum';
		if (e.target === compButton) sign = 'comp';
		if (e.target === quotButton) sign = 'quot';
		if (e.target === resButton) sign = 'res';

		console.log(resultSum);
		return;
	}

	if (inputResult.innerHTML === '') return;

	if (e.target === sumButton) {
		resultSum += parseInt(inputResult.innerHTML);
		// присваиваем текущий знак
		sign = 'sum';
		console.log(sign);
	} else if (e.target === resButton) {
		resultSum -= parseInt(inputResult.innerHTML);
	} else if (e.target === compButton) {
		resultSum *= parseInt(inputResult.innerHTML);
	} else if (e.target === quotButton) {
		resultSum /= parseInt(inputResult.innerHTML);
	}

	console.log(resultSum);
	inputResult.innerHTML = '';
}

resultButton.addEventListener('click', function () {
	var inp = inputResult.innerHTML,
		r = resultSum;

	if (inp === '') inp = 0; 
	if (sign === 'sum') {
		inputResult.innerHTML = r + inp;
	}
});

sumButton.addEventListener('click', calculation);
resButton.addEventListener('click', calculation);
compButton.addEventListener('click', calculation);
quotButton.addEventListener('click', calculation);
