var swiper = new Swiper(".mySwiper0", {
    direction: "vertical",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    },
});