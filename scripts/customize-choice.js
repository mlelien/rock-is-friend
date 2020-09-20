function onCustomize(self) {
	const imgs = document.getElementsByClassName('check');
	for (let img of imgs) {
		img.src = './assets/customize/uncheck.png';
	}

	const selectedImg = document.getElementById(self.id + '-img');
	selectedImg.src = './assets/customize/check.png'

	document.getElementById('size-answer').innerHTML = self.id
}

function showSummary() {
	
}