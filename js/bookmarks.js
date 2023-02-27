import { bookmarks } from "../config.js";

const bookmarkList = document.getElementById('bookmarks');

bookmarks.forEach(bm => {
	let newBtn = document.createElement('a');
	let btnTitle = document.createElement('h1');
	let btnDesc = document.createElement('p');

	newBtn.className = "card center";
	newBtn.title = "open " + bm.title;
	newBtn.href = 'https://' + bm.url;

	btnDesc.className = "desc";
	btnTitle.innerHTML = bm.icon;
	btnDesc.innerHTML = bm.title;

	newBtn.appendChild(btnTitle);
	newBtn.appendChild(btnDesc);

	if (bookmarkList === null) {
		return
	}
	bookmarkList.appendChild(newBtn);
})

