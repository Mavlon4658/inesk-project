const bodyHidden = () => {
    document.querySelector('body').style.overflow = "hidden";
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = "visible";
}

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

const skillsSwp = new Swiper('.skills .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: '.skills .swp_btn__next',
        prevEl: '.skills .swp_btn__prev',
    }
})

const menu = document.querySelector('.menu-modal');
const menuClose = document.querySelector('.menu-modal__close');
const menuBg = document.querySelector('.menu-modal__bg');
const menuOpen = document.querySelector('.header .bars');

menuOpen.onclick = () => {
    menu.classList.add('active');
}

menuClose.onclick = () => {
    menu.classList.remove('active');
    bodyHidden();
}

menuBg.onclick = () => {
    menu.classList.remove('active');
    bodyVisible();
}