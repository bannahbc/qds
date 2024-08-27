const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView:4,
    spaceBetween:0,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    breakpoints: {
    375:{
      spaceBetween:0,slidesPerView:1
    } ,
    300:{
      spaceBetween:0,slidesPerView:1
    } ,
      400:{
    spaceBetween:0,
  
        slidesPerView:1
      },
      640: {
    spaceBetween:0,
  
        slidesPerView: 2
      },
      768: {
    spaceBetween:0,
  
        slidesPerView: 3
      },
      900:{
        spaceBetween:0,
        slidesPerView:4
      }
      
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
  