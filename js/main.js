const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },

  // Enables navigation through slides using keyboard
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});