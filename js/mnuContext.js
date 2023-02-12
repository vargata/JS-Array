mnuRemove.addEventListener("click", () => {
	menu.style.display = "none";
	let id = contextImg.alt;
	lstImg.splice(lstImg.indexOf(id), 1);
	contextImg.remove();
	contextImg = null;
})

mnuClear.addEventListener("click", () => {
	menu.style.display = "none";
	currPicList.innerHTML = null;
	lstImg = [];
})