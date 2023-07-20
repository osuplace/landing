function swapContent(currentContentSelector, newContentSelector) {
	let currentContent = document.querySelector(currentContentSelector);
	let newContent = document.querySelector(newContentSelector);

	currentContent.style.display = "none";
	newContent.style.display = "";
}