// Function to handle the intersection callback
function handleIntersection(entries, observer) {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// When element appears in the viewport
			console.log("test");
			entry.target.setAttribute("data-intersect", "show");
		}
	});
}

// Function to initialize Intersection Observer
function initializeIntersectionObserver() {
	const elements = document.querySelectorAll("[data-intersect]");

	const observer = new IntersectionObserver(handleIntersection, {
		root: null,
		rootMargin: "0px",
		threshold: 0.5, // Adjust threshold value as needed
	});

	elements.forEach((element) => {
		observer.observe(element);
	});
}

// Function to handle the load event
function handleLoad() {
	initializeIntersectionObserver();
}

// Attach the load event listener
window.addEventListener("load", handleLoad);
