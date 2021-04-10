const elem = document.querySelector("#sectionpage");

const swiper = new Swiper('.swiper-container',
{
  // Optional parameters

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

function scrolldown(){
    console.log("hello");
    console.log(elem);
    elem.scrollIntoView();
}