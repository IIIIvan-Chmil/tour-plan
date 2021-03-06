$(document).ready(function () {
    const hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: "coverflow",

    // Enables navigation through slides using keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  const reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },

    // Enables navigation through slides using keyboard
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  var menuButton = document.querySelector(".menu-button");
    menuButton.addEventListener("click", function() {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible");
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on('click', openModal);
  closeModalButton.on("click", closeModal)

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass('modal__overlay--visible');
    modalDialog.addClass('modal__dialog--visible');
  }
  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass('modal__overlay--visible');
    modalDialog.removeClass('modal__dialog--visible');
  }
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeModal(event);
    };
  });

  // Обработка форм
  $('.form').each(function () {
      $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "The name must be at least 2 letters",
        },
        email: {
          required: "We need your email address to contact you",
          email: "Must be name@domain.com",
        },
        phone: {
          required: "Phone is required",
          minlength: "should, pleace +7(###) ###-##-##",
        },
      },
    });
  });

  // Маска телефона
    $(document).ready(function(){
    $('.phone').mask('+7(000) 000-00-00');
  });
  AOS.init();
});