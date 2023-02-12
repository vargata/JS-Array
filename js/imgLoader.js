const url = "https://picsum.photos/v2/list?page=2&limit=100";

function loadContent(){																											//loading addresses for 100 images from picsum
    let req = new XMLHttpRequest();
	req.open('GET', url);
	req.send();
    req.addEventListener("load",
    	() => {
	        imgCache = JSON.parse(req.responseText);
	        showRndImg();
		}
	);
}

function showRndImg(){																										//picking and displaying a random image
    currImg = document.createElement("img");
    let rndImage = imgCache[Math.floor(Math.random() * imgCache.length)];
    currImg.src = "https://picsum.photos/id/" + rndImage['id'] + "/200";
    currImg.alt = rndImage['id'];
    currImg.title = "Author: " + rndImage['author'];
	imgContainer.replaceChildren(currImg);
}