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
	clickOnRes = false,
	firtsClickResValue = 0,
	firtsClickNumValue = 0;


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
	// если был вывод результат то отменяем
	if(clickOnRes) clickOnRes = false; 
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
	} else if (e.target === resButton) {
		sign = 'res';
		resultSum -= parseInt(inputResult.innerHTML);
	} else if (e.target === compButton) {
		sign = 'comp';
		resultSum *= parseInt(inputResult.innerHTML);
	} else if (e.target === quotButton) {
		sign = 'quot';
		resultSum /= parseInt(inputResult.innerHTML);
	}

	console.log(resultSum);
	inputResult.innerHTML = '';
}

resultButton.addEventListener('click', function () {
	var inp = parseInt(inputResult.innerHTML),
		r = resultSum;

	// если выводили то выходим
	if (clickOnRes) return;
	if (inp === '') inp = 0;
	if (sign === 'sum') {
		inputResult.innerHTML = r + inp;
	}
	if (sign === 'res') {
		inputResult.innerHTML = r - inp;
	}
	if (sign === 'quot') {
		inputResult.innerHTML = r / inp;
	}
	if (sign === 'comp') {
		inputResult.innerHTML = r * inp;
	}

	// если что то вывели то стави тру
	if (inputResult.innerHTML !== '') clickOnRes = true;
});

sumButton.addEventListener('click', calculation);
resButton.addEventListener('click', calculation);
compButton.addEventListener('click', calculation);
quotButton.addEventListener('click', calculation);
