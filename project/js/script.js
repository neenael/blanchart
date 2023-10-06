// Фоновый swiper в блоке hero
const hero__swiper = new Swiper('.hero__swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 3000,
    autoplay: {
      delay: 5000,
    }
  });


// swiper в блоке gallery
const gallery__swiper = new Swiper('.gallery__swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'следующий слайд',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next--gallery',
    prevEl: '.swiper-button-prev--gallery',
  },

  breakpoints: {
    1900: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    300: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
}
});

// swiper в блоке Каталог
const person__swiper = new Swiper('.person__swiper', {
  direction: 'horizontal',
  loop: true,
  spaceBetween: 50,
  speed: 500,
  slidesPerView: 1,
  initialSlide: 0,
  allowTouchMove: false,
  
});

// swiper в блоке События
  const events__swiper = new Swiper('.events__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.swiper-button-next--events',
      prevEl: '.swiper-button-prev--events',
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'следующий слайд',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
      1900: {
        spaceBetween: 50,
      },
      1020: {
        spaceBetween: 27,
        slidesPerView: 3,
        slidesPerGroup: 3,

      },
      760: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },}
  });


// swiper партнеров
  const swiper = new Swiper('.partners__swiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'следующий слайд',
    },
    navigation: {
      nextEl: '.swiper-button-next--partner',
      prevEl: '.swiper-button-prev--partner',
    },
    breakpoints: {
      1900: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1020: {
        spaceBetween: 50,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      760: {
        spaceBetween: 34,
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      320: {
        spaceBetween: 34,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
      

  });


  // Добавление choices класса select_ui
  document.addEventListener("DOMContentLoaded", function() {
    const selector = document.querySelector(".choices")  
    const choices = new Choices(selector, {
      searchEnabled: false,
      classNames: {
        containerOuter: 'choices header_choices select_ui',
       },
    });
  });


// Смена карточки в блоке Каталог по нажатии на имя
var personLinks = document.querySelectorAll(".person__link");
var personBlock = document.querySelector(".catalog__person-col");
personLinks.forEach(function(el){
 el.addEventListener("click", ()=>{
  if (el.id == "ghirlandaio_btn"){
    person__swiper.slideTo(0);
  } else {
    person__swiper.slideTo(1);
  }
 })
})

// Аккордион в блоке Каталог
document.addEventListener("DOMContentLoaded", function() {
  let acc = new Accordion('.accordion__list', {
  duration: 700,
  elementClass: 'accordion__item',
  triggerClass: 'accordion__top',
  panelClass: 'accordion__bottom',
  showMultiple: false,
  collapse: true,
  });
})


// Яндекс карты
  ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.76049806603221,37.6144830434951],
          zoom: 14.5,
      });
      let placemark = new ymaps.Placemark([55.76049806603221,37.6144830434951], {}, {      
        iconLayout: 'default#image',
        iconImageHref: 'img/placemark_custom.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [0, 0]
      });
      myMap.controls.remove('geolocationControl'); 
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl'); 
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('zoomControl');
      myMap.controls.remove('rulerControl');
      myMap.behaviors.disable(['scrollZoom']);
      myMap.geoObjects.add(placemark);
}






// Скроллбар в dropdown меню
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})

// Открытие/закрытие dropdown меню
const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})



// Открытие бургер меню
document.querySelector('.burger__btn').addEventListener("click", function(){
  document.querySelector('.header__top__nav').classList.toggle("is_active");
  document.querySelector('.burger__btn').classList.toggle("to_close");
  document.querySelector('body').classList.toggle("stop_scroll")
})


// Закрытие бургер меню
var navLinks = document.querySelectorAll(".nav-top__link")
navLinks.forEach((el)=>{
el.addEventListener("click", ()=>{
  document.querySelector(".header__top__nav.nav-top").classList.remove("is_active");
  document.querySelector("body").classList.remove("stop_scroll");
  document.querySelector(".burger__btn").classList.remove("to_close")
})
})


// Открытие поиска
document.querySelector('.search__form__btn').addEventListener("click", function(){
  const state = document.querySelector('.search__form__btn').getAttribute('data-state');
  if (state === 'button'){
    document.querySelector('.search').classList.add("is_open");
    document.querySelector('.search__form__btn').setAttribute('data-state', 'submit')
  }
  if (state === 'submit'){
    document.querySelector('.search__form__btn').setAttribute('type', 'submit');
  }
})


// Закрытие поиска
document.querySelector('.search__form__btn-close').addEventListener("click", function(){
  document.querySelector('.search').classList.remove("is_open");
  document.querySelector('.search__form__btn').setAttribute('type', 'button');
  document.querySelector('.search__form__btn').setAttribute('data-state', 'button')
  
})


// Маска для телефона
var phoneMask = IMask(
  document.querySelector('.phone-mask'), {
    mask: '+{7} (000) 000-00-00'
  });


  // Тултипы
  tippy('.tooltip--example', {
    content: 'Пример современных тенденций – современная методология разработки',
    trigger: 'click',
    theme: 'blanchard',
  });
  tippy('.tooltip--emotions', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    trigger: 'click',
    theme: 'blanchard',
  });
  
  tippy('.tooltip--quality', {
    content: 'В стремлении повысить качество',
    trigger: 'click',
    theme: 'blanchard',
  });

// Всплывающее окно для картин
  Fancybox.bind('[data-fancybox]', {
    hideScrollbar: true,
    Toolbar: false,
    closeButton: true,
    defaultDisplay: "flex",
    autoFocus: false,
    placeFocusBack: false,

  });    

  
// Работа dropdown
  function toggleDropdown(menuId, event) {
    var dropdownMenu = document.getElementById(menuId);
    dropdownMenu.classList.toggle("dropdown__active");
    var dropdownMenus = document.querySelectorAll(".dropdown");
    for (var i = 0; i < dropdownMenus.length; i++) {
      var menu = dropdownMenus[i];
      if (menu.id !== menuId && menu.classList.contains("dropdown__active")) {
        menu.classList.remove("dropdown__active");
      }
    }
    event.stopPropagation();
  }
  document.addEventListener("click", function(event) {
    var dropdownMenu = document.querySelector(".dropdown.dropdown__active");
    if (!dropdownMenu.contains(event.target)) {
      dropdownMenu.classList.remove("dropdown__active");
    }
  });
  
// Работа фокуса для аккордиона
  var accordionBtns = document.querySelectorAll(".accordion__btn")
  accordionBtns.forEach(function(el){
    el.addEventListener("focusin", (event)=>{
      var accordionItem = event.target.parentElement;
      accordionItem.classList.add("is-focused")
     
    });
    el.addEventListener("focusout", (event)=>{
      var accordionItem = event.target.parentElement;
      accordionItem.classList.remove("is-focused")
    });
  })


  