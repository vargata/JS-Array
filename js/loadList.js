function loadLists(email){
	currPicList.innerHTML = null;
	lstImg = [];
	if(lstImgCollections[email]) {
		lstImgCollections[email].forEach(
			element =>{
				let newPic = document.createElement("img");
				newPic.src =  "https://picsum.photos/id/" + element + "/200";
				newPic.alt = element;
				newPic.addEventListener("contextmenu", (event) => {
					event.preventDefault();
					contextImg = event.currentTarget;
					menu.style.display= "block";
					menu.style.left = event.pageX + "px";
					menu.style.top = event.pageY + "px";
				});				
				currPicList.prepend(newPic);
				lstImg = lstImgCollections[email];
			}
		)
	}
	
	if(Object.keys(lstImgCollections).length > 0){
		allPicList.innerHTML = null;
		for(let key in lstImgCollections){
			if(key !== email){
				
				let oldLblList = document.createElement("label");{
					oldLblList.innerText = key + ":";
					oldLblList.classList.add("lblOldPic");					
					allPicList.append(oldLblList);
				}
				
				let oldPicList = document.createElement("div");{
					oldPicList.setAttribute("id", key);
					oldPicList.classList.add("dvOldPic");
					
					lstImgCollections[key].forEach(element =>{
						let newPic = document.createElement("img");
						newPic.src =  "https://picsum.photos/id/" + element + "/200";
						oldPicList.prepend(newPic);
					})
					
					allPicList.append(oldPicList);
					oldPicList.addEventListener("click", (e) => {
						selEmail.value = e.currentTarget.getAttribute("id");
			    		selEmail.dispatchEvent(new Event("change"));
					});
				}
			}
		}
	}
}