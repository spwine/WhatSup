const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    //Scroll back to the TOP
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile nav
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

// Sticky nav

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      console.log(ent);
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    roodMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);

//scroll fade

var fadeElements = document.getElementsByClassName("scrollFade");

function scrollFade() {
  var viewportBottom = window.scrollY + window.innerHeight;

  for (var index = 0; index < fadeElements.length; index++) {
    var element = fadeElements[index];
    var rect = element.getBoundingClientRect();

    var elementFourth = rect.height / 4;
    var fadeInPoint = window.innerHeight - elementFourth;
    var fadeOutPoint = -(rect.height / 2);

    if (rect.top <= fadeInPoint) {
      element.classList.add("scrollFade--visible");
      element.classList.add("scrollFade--animate");
      element.classList.remove("scrollFade--hidden");
    } else {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }

    if (rect.top <= fadeOutPoint) {
      element.classList.remove("scrollFade--visible");
      element.classList.add("scrollFade--hidden");
    }
  }
}

document.addEventListener("scroll", scrollFade);
window.addEventListener("resize", scrollFade);
document.addEventListener("DOMContentLoaded", function () {
  scrollFade();
});
