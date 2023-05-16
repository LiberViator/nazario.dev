import Swiper, { Navigation, Pagination } from "swiper";

const stepsSlider = new Swiper(".stepsSlider", {
	pagination: {
		el: ".stepsSlider-pagination",
		type: "fraction",
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
		768: {
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
	},
	grabCursor: true,
	slidesPerView: 1,
	spaceBetween: 16,
	speed: 400,
	breakpoints: {
		640: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 32,
		},
	},
	modules: [Navigation, Pagination],
});
