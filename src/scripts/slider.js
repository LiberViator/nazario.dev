import Swiper, { Navigation, Pagination } from "swiper";

const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
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
	},
	modules: [Navigation, Pagination],
});
