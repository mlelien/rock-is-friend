function onHowItWorks(self) {
	const howPhoto = document.getElementById('how-photo');
	const howText = document.getElementById('how-text');
	
	const howTitle = document.getElementById('how-box').getElementsByTagName('span')[0];

	const imageSteps = document.getElementById('how-steps').getElementsByTagName('img');
	const descriptionSteps = document.getElementById('how-steps').getElementsByTagName('p');

	if (self.id === 'how-photo') {
		onHowPhoto(howPhoto, howText, howTitle, imageSteps, descriptionSteps);
	} else {
		onHowText(howPhoto, howText, howTitle, imageSteps, descriptionSteps);
	}
}

function onHowPhoto(howPhoto, howText, howTitle, imageSteps, descriptionSteps) {
	onSelected(howPhoto);
	onDeselected(howText);

	howTitle.innerHTML = 'photo';

	imageSteps[0].src = './assets/how/step-picture.png';
	imageSteps[1].src = './assets/how/step-illustration.png';

	descriptionSteps[0].innerHTML = 'Upload your picture or logo';
	descriptionSteps[1].innerHTML = 'Our artists will draw a digital cartoon';
	descriptionSteps[2].innerHTML = 'Goes on your pet rock!';
}

function onHowText(howPhoto, howText, howTitle, imageSteps, descriptionSteps) {
	onSelected(howText);
	onDeselected(howPhoto);

	howTitle.innerHTML = 'text'

	imageSteps[0].src = './assets/how/step-text.png';
	imageSteps[1].src = './assets/how/step-font.png';

	descriptionSteps[0].innerHTML = "Write any text you want";
	descriptionSteps[1].innerHTML = "Select a font";
	descriptionSteps[2].innerHTML = "Goes on your pet rock!";
}

function onSelected(selectedObj) {
	selectedObj.classList.add('selected');
	selectedObj.getElementsByTagName('img')[0].src = './assets/how/' + selectedObj.id + '-selected.png';
}

function onDeselected(deselectedObj) {
	deselectedObj.classList.remove('selected');
	deselectedObj.getElementsByTagName('img')[0].src = './assets/how/' + deselectedObj.id + '.png';
}