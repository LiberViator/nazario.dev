import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const stepsSlider = new Swiper(".stepsSlider", {
	pagination: {
		el: ".stepsSlider-pagination",
		// type: "bullets",
		type: "custom",
		renderCustom: function (swiper, current, total) {
			return current + " z " + total;
		},
		clickable: true,
	},
	navigation: {
		nextEl: ".stepsSlider-button-next",
		prevEl: ".stepsSlider-button-prev",
	},
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 24,
	speed: 400,
	breakpoints: {
		1024: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
	},
	modules: [Navigation, Pagination],
});

const worksSlider = new Swiper(".worksSlider", {
	pagination: {
		el: ".worksSlider-pagination",
		type: "bullets",
		clickable: true,
	},
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 24,
	speed: 400,
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 32,
		},
		1024: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
	},
	modules: [Pagination],
});
