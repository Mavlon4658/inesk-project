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

let modal_one_btn = document.querySelectorAll('.modal_one_btn');
let modal_two_btn = document.querySelectorAll('.modal_two_btn');
let modal_one = document.querySelector('.modal_one');
let modal_two = document.querySelector('.modal_two');
let modal_bg = document.querySelector('.modal_bg');

modal_one_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal_one.classList.add('active');
        modal_bg.classList.add('active');
    });
});

modal_two_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal_two.classList.add('active');
        modal_bg.classList.add('active');
    });
});

modal_bg.addEventListener('click', () => {
    modal_one.classList.remove('active');
    modal_two.classList.remove('active');
    modal_bg.classList.remove('active');
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
