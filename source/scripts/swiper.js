const swiper = new Swiper(".projects__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1.5,
  breakpoints: {
    1920: {
      slidesPerView: 2.15,
    }
  },
  grabCursor: true,
  rewind:true,
  slideToClickedSlide: true,
  spaceBetween: 45,
});

const newsswiper = new Swiper(".news__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 3,
  centeredSlides: true,
  loop: true,
});
