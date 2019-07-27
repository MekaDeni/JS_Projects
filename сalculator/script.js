'use-strict';

function startApp() {
	var buttonNum = document.getElementsByClassName('button-num'),
		buttonCom = document.getElementsByClassName('button-com'),
		inputResult = document.getElementById('inputResult'),
		arrNum = [],
		result = 0;

	for(var i = 0; i < buttonNum.length; i++) {
		buttonNum[i].addEventListener('click', clickButtonNum);
	}

	for(var i = 0; i < buttonCom.length; i++) {
		buttonCom[i].addEventListener('click', clickButtonCommand);
	}

	function clickButtonNum(e) {
		// конкатенируем значения из поля со значением из нажатой кнопки
		// и кладем в поле
		inputResult.innerHTML = +(inputResult.innerHTML + e.target.innerHTML);
	}


	function clickButtonCommand(e) {
		// парсем число и кладем в массив
		arrNum.push(parseInt(inputResult.innerHTML));
		// обнуляем табло
		inputResult.innerHTML = 0;

		// если в массиве 2 числа
		// вычетаем 2-ое и 1-ого
		// резалт пишем в табло
		// после обнуляем резалт
		if(arrNum.length > 1) {
			result += arrNum[0] - arrNum[1];
			arrNum = [];
			inputResult.innerHTML = result;
			result = 0;
			
			console.log('В поле было число =', inputResult.innerHTML, arrNum, result);
		}

	}
}

document.addEventListener("DOMContentLoaded", startApp());