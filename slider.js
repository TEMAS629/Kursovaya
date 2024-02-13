var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  document.querySelector('button').addEventListener('translateZ', function() {
    document.getElementById('swiper-slide-active').classList.toggle("swiper-slide-next");
  })
    