function swapContent(currentContentSelector, newContentSelector) {
	let currentContent = document.querySelector(currentContentSelector);
	let newContent = document.querySelector(newContentSelector);

	currentContent.style.display = "none";
	newContent.style.display = "";
}

function handleFragment() {
	console.log(window.location.hash)
	if (window.location.hash == '#onboarding') {
		swapContent('div.card.place2023 .main-content', 'div.card.place2023 .template-instructions');
	} else {
		swapContent('div.card.place2023 .template-instructions', 'div.card.place2023 .main-content');
	}
}

window.onload = handleFragment;
window.onhashchange = handleFragment;