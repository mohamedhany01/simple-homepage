var myCarousel = document.querySelector('#galleryCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 20000,
  wrap: false
})

// Update year in footer
let footerYear = document.getElementById('current-year');

let currentYear = new Date();

footerYear.textContent = currentYear.getFullYear(); 
