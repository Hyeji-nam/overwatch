import ScrollSpy from "bootstrap/js/dist/scrollspy"
import Swiper from "swiper/swiper-bundle.min.js"
import TypeIt from "typeit"

new ScrollSpy(document.body, {
  target: '#navbar-body'
})

// MOBILE MENU EVENT
const mobileIconEl = document.querySelector('.mobile-menu .menu-icon')
const mobileDdnOryEl = document.querySelector('.m-dropdown-overay')
const mobileDdnMenuEl = document.querySelector('.m-dropdown-menu')
const closeBtnEl = document.querySelector('.dropdown-header .close-btn')
const communityListEl = document.querySelector('.community-list')
const communityCtnEl = document.querySelector('.community-container')

mobileIconEl.addEventListener('click', () => {
  mobileDdnOryEl.classList.add('show')
  mobileDdnMenuEl.classList.add('show')
})

closeBtnEl.addEventListener('click', () => {
  mobileDdnOryEl.classList.remove('show')
  mobileDdnMenuEl.classList.remove('show')
})

communityListEl.addEventListener('click', () => {
  communityListEl.classList.toggle('clicked')
  communityCtnEl.classList.toggle('opened')
})

// TYPEIT ANIMATION
new TypeIt('.main .heading', {
  strings: '쟁취할 가치가 있는 미래',
  speed: 70, 
  afterComplete: function (instance) {
    instance.destroy();
  }
}).go();

// BATTLEFIELD SWIPER
new Swiper('.battlefield .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: '.battlefield .swiper-prev',
    nextEl: '.battlefield .swiper-next'
  },
  pagination: {
    el: ".battlefield .swiper-pagination",
    clickable: true
  }
});



// footer 올해 연도 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()