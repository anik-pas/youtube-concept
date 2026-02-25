const myChannelSlider = new Swiper(".my-channel-slider", {
  // Optional parameters
  loop: true,
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: ".my-channel-button-next",
    prevEl: ".my-channel-button-prev",
  },
});
/*document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".channel-slider");

  sliders.forEach((slider) => {
    const channel = slider.closest(".channel");
    const prevBtn = channel.querySelector(".channel-button-prev");
    const nextBtn = channel.querySelector(".channel-button-next");

    // ОПРЕДЕЛЯЕМ ТИП СЛАЙДЕРА
    const isShortSlider = channel.classList.contains("channel-short");

    new Swiper(slider, {
      // НАСТРОЙКИ ДЛЯ КОРОТКОГО СЛАЙДЕРА
      slidesPerView: isShortSlider ? 2.8 : 5,
      spaceBetween: isShortSlider ? 25 : 20, // Больше отступ для короткого слайдера

      loop: false,
      centeredSlides: false,

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },

      breakpoints: {
        320: {
          slidesPerView: isShortSlider ? 1.3 : 1.5,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: isShortSlider ? 2.2 : 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: isShortSlider ? 2.8 : 5,
          spaceBetween: isShortSlider ? 25 : 20,
        },
      },
    });
  });
});
*/
