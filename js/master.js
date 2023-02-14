var lstEmail = [];
var lstImg = [];
var lstImgCollections = [];
var imgCache = null;
var currImg = null;
var contextImg = null;

const inEmail = document.querySelector("#inEmail");
const selEmail = document.querySelector("#selEmail");
const dvResponse = document.querySelector("#dvResponse");
const imgContainer = document.querySelector('#dvImgContainer');
const currPicList = document.querySelector('#dvCurrList');
const allPicList = document.querySelector('#dvAllList');
const emailHeader = document.querySelector('#emailHeader');
const menu = document.querySelector("#mnuContext");
const mnuRemove = document.querySelector("#mnuRemove");
const mnuClear = document.querySelector("#mnuClear");

document.addEventListener('DOMContentLoaded', () => {
	getCookies();
	loadContent();
})

document.addEventListener("click", (e) => {
	if((e.target !== menu && e.target !== mnuRemove && e.target !== mnuClear) && menu.style.display == "block") {
		menu.style.display = "none";
		contextImg = null;
	}
})

function getCookies() {
	if(document.cookie){
		let app = document.cookie.split(";")[0].split("=")[1].split(",");
		if(app ==="JS-Array"){
			let emails = document.cookie.split(";")[1].split("=")[1].split(",");
			emails.forEach(element => addEmail(element));
			selEmail.selectedIndex = 0;
			inEmail.value = selEmail.value;
		}
	}
}

function setCookies(){
	let now = new Date();
	document.cookie = "app=JS-Array; expires=" +  new Date(now.setDate(now.getDate() + 30)).toUTCString() + "; path=/";
	document.cookie = "emails=" + lstEmail.toString() + "; expires=" +  new Date(now.setDate(now.getDate() + 30)).toUTCString() + "; path=/";
}