var calculator = document.getElementById('calculator'),
	onButton = document.getElementById('onButton');

onButton.addEventListener('click', function () {
	if (onButton.classList.contains('--onButton__off')) {
		onButton.classList.remove('--onButton__off');
		onButton.classList.add('--onButton__on');
	} else {
		onButton.classList.remove('--onButton__on');
		onButton.classList.add('--onButton__off');
	}
});