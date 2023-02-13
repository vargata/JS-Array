function addEmail(email) {
	let response = null;
	if(!lstEmail.includes(email)){
		if(email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)) {
			lstEmail.push(email);
			let newMail = document.createElement('option');
		    newMail.value = email;
		    newMail.innerHTML = email;
		    selEmail.appendChild(newMail);
		    selEmail.value = email;
		    selEmail.dispatchEvent(new Event("change"));
		    response = true;
		    setCookies();
			dvResponse.innerText += "EMail added successfully " + email + "\n\n";
			dvResponse.style.color = "black";
			dvResponse.style.boxShadow ="inset 0px 0px 3px 2px #222a";
	    } else {
			response = false;
		}
	} else {
		response = true;
	}	
	return response;
}

selEmail.addEventListener("change", () => {
	inEmail.value = selEmail.value;
	
	if(lstImg.length > 0){
		 lstImgCollections[emailHeader.innerText] = lstImg;
	} else {
		if(lstImgCollections[emailHeader.innerText])
			delete lstImgCollections[emailHeader.innerText];
	}
		
	emailHeader.innerText = selEmail.value;	
	dvResponse.innerText = "EMail selected: " + selEmail.value + "\n\n";
	dvResponse.style.color = "black";
	dvResponse.style.boxShadow ="inset 0px 0px 3px 2px #222a";
	
	loadLists(selEmail.value);	
});