const observer = new IntersectionObserver((_entries) =>
  _entries.forEach((_entry) => {
    if (_entry.isIntersecting) {
      _entry.target.classList.add("show");
    }
  })
);
const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));
