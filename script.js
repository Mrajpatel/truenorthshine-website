// Shrink navbar on scroll
window.addEventListener("scroll", function () {
     const navbar = document.querySelector(".navbar");
     if (window.scrollY > 50) {
       navbar.classList.add("navbar-shrink");
     } else {
       navbar.classList.remove("navbar-shrink");
     }
});

document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flipped');
  });
});

// Auto-scroll and arrow scroll script 
const scrollGallery = document.getElementById("scrollGallery");
const scrollLeftBtn = document.getElementById("scrollLeft");
const scrollRightBtn = document.getElementById("scrollRight");

scrollLeftBtn.addEventListener("click", () => {
scrollGallery.scrollBy({ left: -300, behavior: "smooth" });
});

scrollRightBtn.addEventListener("click", () => {
scrollGallery.scrollBy({ left: 300, behavior: "smooth" });
});

// Auto-scroll every 2 seconds
// setInterval(() => {
// scrollGallery.scrollBy({ left: 300, behavior: "smooth" });
// if (scrollGallery.scrollLeft + scrollGallery.clientWidth >= scrollGallery.scrollWidth - 10) {
//      scrollGallery.scrollTo({ left: 0, behavior: "smooth" });
// }
// }, 2000);
