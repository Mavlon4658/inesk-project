const directionSwp = new Swiper('.direction .swiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 15,
    initialSlide: 1,
    onSlideChangeEnd:function(e){
        directionSwp.update(true);
    },
    navigation: {
        nextEl: '.direction .swiper .swp_btn__next',
        prevEl: '.direction .swiper .swp_btn__prev',
    }
})

document.querySelectorAll('.direction .swiper-slide .main-img').forEach((el, elID) => {
    el.onclick = () => {
        directionSwp.slideTo(elID);
    }
})