const observer = new IntersectionObserver((_entries) =>
  _entries.forEach((_entry) => {
    if (_entry.isIntersecting) {
      console.log(_entry);
      _entry.target.classList.add("play");
    }
  })
);

const shouldAnimate = document.querySelectorAll("[class*=onscroll-animate-]");
shouldAnimate.forEach((el) => observer.observe(el));
