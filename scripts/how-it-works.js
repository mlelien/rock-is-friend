function onHowItWorks(self) {
	const howPhotos = document.getElementsByClassName('how-photo');
	const howTexts = document.getElementsByClassName('how-text');
	
	const howTitle = document.getElementById('how-box').getElementsByTagName('span')[0];

	const imageSteps = document.getElementById('how-steps').getElementsByTagName('img');
	const descriptionSteps = document.getElementById('how-steps').getElementsByTagName('p');

	if (self.id === 'how-photo') {
		onhowPhotos(howPhotos, howTexts, howTitle, imageSteps, descriptionSteps);
	} else {
		onhowTexts(howPhotos, howTexts, howTitle, imageSteps, descriptionSteps);
	}
}

function onhowPhotos(howPhotos, howTexts, howTitle, imageSteps, descriptionSteps) {
	onSelected(howPhotos);
	onDeselected(howTexts);

	howTitle.innerHTML = 'photo';

	imageSteps[0].src = './assets/how/step-picture.png';
	imageSteps[1].src = './assets/how/step-illustration.png';

	descriptionSteps[0].innerHTML = 'Upload your picture or logo';
	descriptionSteps[1].innerHTML = 'Our artists will draw a digital cartoon';
	descriptionSteps[2].innerHTML = 'Goes on your pet rock!';
}

function onhowTexts(howPhotos, howTexts, howTitle, imageSteps, descriptionSteps) {
	onSelected(howTexts);
	onDeselected(howPhotos);

	howTitle.innerHTML = 'text'

	imageSteps[0].src = './assets/how/step-text.png';
	imageSteps[1].src = './assets/how/step-font.png';

	descriptionSteps[0].innerHTML = "Write any text you want";
	descriptionSteps[1].innerHTML = "Select a font";
	descriptionSteps[2].innerHTML = "Goes on your pet rock!";
}

function onSelected(selectedObjs) {
	for (let selectedObj of selectedObjs) {
		selectedObj.classList.add('selected');
		selectedObj.getElementsByTagName('img')[0].src = './assets/how/' + selectedObj.id + '-selected.png';
	}
}

function onDeselected(deselectedObjs) {
	for (let deselectedObj of deselectedObjs) {
		deselectedObj.classList.remove('selected');
		deselectedObj.getElementsByTagName('img')[0].src = './assets/how/' + deselectedObj.id + '.png';
	}
}