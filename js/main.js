const bodyHidden = () => {
    document.querySelector('body').style.overflow = "hidden";
}

const bodyVisible = () => {
    document.querySelector('body').style.overflow = "visible";
}

const directionContentSwp = new Swiper('.direction .direction__content_right .swiper', {
    slidesPerView: 1,
    allowTouchMove: false,
    effect: 'fade',
})

const directionSwp = new Swiper('.direction .direction__content_swp .swiper', {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: -30,
    loop: true,
    navigation: {
        nextEl: '.direction .swp_btn__next',
        prevEl: '.direction .swp_btn__prev',
    },
    thumbs: {
        swiper: directionContentSwp,
    },
})

document.querySelectorAll('.direction .direction__content_swp .swiper-slide').forEach((el, elID) => {
    el.onclick = () => {
        if (el.classList.contains('swiper-slide-next')) {
            directionSwp.slideNext();
        }

        if (el.classList.contains('swiper-slide-prev')) {
            directionSwp.slidePrev();
        }
    }
})

let modal_one_btn = document.querySelectorAll('.modal_one_btn');
let modal_two_btn = document.querySelectorAll('.modal_two_btn');
let modal_one = document.querySelector('.modal_one');
let modal_two = document.querySelector('.modal_two');
let modal_twoClose = document.querySelector('.modal_two__close');
let modal_bg = document.querySelector('.modal_bg');

modal_one_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        modal_one.classList.add('active');
        modal_bg.classList.add('active');
        bodyHidden();
    });
});

modal_twoClose.onclick = () => {
    modal_two.classList.remove('active');
    modal_bg.classList.remove('active');
    bodyVisible();
}

modal_two_btn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal_two.classList.add('active');
        modal_bg.classList.add('active');
        bodyHidden();
    });
});

modal_bg.addEventListener('click', () => {
    modal_one.classList.remove('active');
    modal_two.classList.remove('active');
    modal_bg.classList.remove('active');
    bodyVisible();
})

const skillsContent = new Swiper('.skills__card_content .swiper', {
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    allowTouchMove: false,
})

const skillsSwp = new Swiper('.skills .skills__card_img .swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: 'fade',
    navigation: {
        nextEl: '.skills .swp_btn__next',
        prevEl: '.skills .swp_btn__prev',
    },
    thumbs: {
        swiper: skillsContent,
    },
})


const menu = document.querySelector('.menu-modal');
const menuClose = document.querySelector('.menu-modal__close');
const menuBg = document.querySelector('.menu-modal__bg');
const menuOpen = document.querySelector('.header .bars');
const menuLinks = document.querySelectorAll('.menu-modal li a');

menuOpen.onclick = () => {
    menu.classList.add('active');
    bodyHidden();
}

menuClose.onclick = () => {
    menu.classList.remove('active');
    bodyVisible();
}

menuBg.onclick = () => {
    menu.classList.remove('active');
    bodyVisible();
}

menuLinks.forEach(el => {
    el.onclick = () => {
        menu.classList.remove('active');
        bodyVisible();
    }
})
