const swiper = new Swiper(".projects__slider", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  rewind:true,
  slideToClickedSlide: true,
  slidesPerView: "auto",
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
