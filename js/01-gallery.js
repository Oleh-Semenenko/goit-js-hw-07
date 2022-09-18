import { galleryItems } from './gallery-items.js';


const galleryRef = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItems(gallery) {
	return gallery.map(({ preview, original, description }) => {
		return `<div class="gallery__item">
					<a class="gallery__link" href="${original}">
						<img
							class="gallery__image"
							src="${preview}"
							data-source="${original}"
							alt="${description}"
						/>
					</a>
				</div>`;
		})
		.join('');
}

galleryRef.addEventListener("click", onImageClick);

function onImageClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== 'IMG') {
		return;
	}
	const originalUrl = event.target.dataset.source;

	const instance = basicLightbox.create(`
    <img src="${originalUrl}" width="800" height="600">
`);
	instance.show();

	window.addEventListener("keydown", (event) => {
		if (event.code === "Escape") {
			instance.close();
		}
	});
}





