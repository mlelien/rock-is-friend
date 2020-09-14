function onHowItWorks() {
	const howPhoto = document.getElementById('how-photo');
	const howText = document.getElementById('how-text');

	if (howPhoto.classList.contains('selected')) {
		howPhoto.classList.remove('selected');
	} else {
		howPhoto.classList.add('selected');
	}

	if (howText.classList.contains('selected')) {
		howText.classList.remove('selected');
	} else {
		howText.classList.add('selected');
	}
}