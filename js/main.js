import Dropdown from "bootstrap/js/dist/dropdown"
import Collapse from "bootstrap/js/dist/collapse"
import ScrollSpy from "bootstrap/js/dist/scrollspy"

import Swiper from "swiper/swiper-bundle.min.js"


const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const dropdownList = [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))

const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new Collapse(collapseEl))

new ScrollSpy(document.body, {
  target: '#navbar-body'
})

// BATTLEFIELD SWIPER
new Swiper('.battlefield .swiper-container', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: '.battlefield .swiper-prev',
    nextEl: '.battlefield .swiper-next'
  }
});


// footer 올해 연도 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()