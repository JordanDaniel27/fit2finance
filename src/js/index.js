function show() {
  document.querySelector(".hamburger").classList.toggle("open");
  document.querySelector(".navigation").classList.toggle("active");
}

var slider = new Swiper(".slider", {
  slidesPerView: 2,
  spaceBetween: 50,
  loop: true,
  grab: true,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3) */
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*  on: {
    init: function () {
      this.params.slidesPerGroup = 2; // Avanza 2 diapositivas cada vez
      this.update(); // Actualiza el swiper con el nuevo número de diapositivas por grupo
    },
  }, */
  breakpoints: {
    0: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
});

var logosClientes = new Swiper(".logosClientes", {
  slidesPerView: 5,
  spaceBetween: 10,
  loop: true,
  grab: true,
  centeredSlides: true,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3) */
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 5,
    },
  },
});

var blogs = new Swiper(".blogs", {
  slidesPerView: 3,
  spaceBetween: 50,
  loop: true,
  grab: true,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3) */

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

var banner = new Swiper(".banner", {
  slidesPerView: 4,
  spaceBetween: 0,
  loop: true,
  grab: true,
  centeredSlides: false,
  initialSlide: 0, // Empieza en el cuarto slide (índice 3) */
  pagination: {
    el: ".swiper-pagination-estadisticas",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
