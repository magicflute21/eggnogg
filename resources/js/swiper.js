import Swiper, { Autoplay, Pagination, HashNavigation, EffectFade, Lazy } from 'swiper';

Swiper.use([Autoplay, Pagination, EffectFade, Lazy]);

const swiper = new Swiper('.swiper-container', {
    loop: true,
    speed: 1000,
    lazyloading: true,
    paginationClickable: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    autoplay: {
        delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

});
