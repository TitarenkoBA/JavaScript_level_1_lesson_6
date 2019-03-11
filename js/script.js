var doc = document;
var album = doc.querySelector ('.album');
var cells = 10;
var galleryItem = doc.querySelector('.galleryItem').content;
var mainImage = doc.querySelector ('.img');
var num = 1;

var renderItems = function () {
	let newItem;
	let roulette = doc.createDocumentFragment ();

	for (let i = 0; i < cells; i++) {
		newItem = galleryItem.cloneNode(true);
		newItem.querySelector('.imgThumb').classList.add('gThumb');
		newItem.querySelector('.imgThumb').classList.add('thumb' + i);
		newItem.querySelector('.imgThumb').style.backgroundImage = "url('img/background-" + (i + 1) + ".JPG')";
		roulette.appendChild(newItem);

		var img = new Image();
		img.src = "img/background-" + (i + 1) + ".JPG";
		img.onerror = function() {
			cells--;
			let r = doc.querySelector('.thumb' + i);
			let f = doc.querySelector('.album');
			f.removeChild(r);
			return cells;
		};
	}
	album.appendChild (roulette);
};

renderItems ();

var galleryApp = function (evt) {
	console.log(evt);
	
	if (evt.target.parentElement.className == 'albumWrapper' || evt.target.classList.contains('imgThumb') == true) {
		mainImage.style.backgroundImage = evt.target.style.backgroundImage;
	}
	if (evt.target.className == 'albumArrow right') {
		if (num > cells) {
			num = 1;
		}
		mainImage.style.backgroundImage = "url('img/background-" + (num++) + ".JPG')";
	}
	if (evt.target.className == 'albumArrow left') {
		if (num <= 0) {
			num = (cells + 1) - 1;
		}
		mainImage.style.backgroundImage = "url('img/background-" + (num--) + ".JPG')";
	}
};

window.addEventListener ('click', galleryApp);