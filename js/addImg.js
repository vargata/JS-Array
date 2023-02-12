function addImage(){
	dvResponse.innerText = "";
	
	if(addEmail(inEmail.value)){																												//if email is valid
		if(!lstImg.includes(currImg.alt)){																									//and image is not yet in the list
			let newPic = currImg.cloneNode(true);
			newPic.addEventListener("contextmenu", (event) => {
				event.preventDefault();
				contextImg = event.currentTarget;
				menu.style.display= "block";
				menu.style.left = event.pageX + "px";
				menu.style.top = event.pageY + "px";
			});
			currPicList.prepend(newPic);																									//add it			
			lstImg.push(currImg.alt);
			
			dvResponse.innerText += "Picture was successfully assigned to " + inEmail.value + "\n\n";
			dvResponse.style.color = "black";
			dvResponse.style.boxShadow ="inset 0px 0px 3px 2px #222a";
		} else {
			dvResponse.innerText += "Picture was already assigned to " + inEmail.value + "\n\n";
			dvResponse.style.color = "red";
			dvResponse.style.boxShadow ="inset 0px 0px 3px 2px #a00a";
		}
		showRndImg();
	} else {
		dvResponse.innerText += "invalid email address, please enter or select a valid email\n\n";
		dvResponse.style.color = "red";
		dvResponse.style.boxShadow ="inset 0px 0px 3px 2px #a00a";
	}
}