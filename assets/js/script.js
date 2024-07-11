// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Carousel
var myCarousel = document.querySelector('#carouselCidades')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true
})