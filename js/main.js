// Load
// .nextpage_btn 按鈕
$(function () {
    setTimeout(function () {
        $(".nextpage_btn").show();
    }, 5000);

    // setTimeout(function () {
    //     $("#load_video").hide();
    // }, 8000);
})

$(".nextpage_btn").click(function () {
    $(".load").css("transform", "translateY(-125vh)");

    $(".show").css("display", "block");

    setTimeout(function () {
        $(".load").hide();
    }, 3000);

})


// Scroll to top
const scrollTopBtn = document.querySelector(".scrollToTop_btn");

window.addEventListener("scroll", function () {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
})

scrollTopBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav_items a[href*=" + id + "]").classList.add("active");
        } else {
            document.querySelector(".nav_items a[href*=" + id + "]").classList.remove("active");
        }
    });
});

//  Light/Dark
const themeBtn = document.querySelector(".theme_btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark_theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved_theme", getCurrentTheme());
    localStorage.setItem("save_icon", getCurrentIcon());
})

const getCurrentTheme = () => document.body.classList.contains("dark_theme") ? "dark" : "light";

const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved_theme");
const savedIcon = localStorage.getItem("saved_icon");

if (savedTheme) {
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark_theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

// Navigation bar
window.addEventListener('scroll', function () {
    // console.log('Hi!');

    // header
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);

})

// $(window).scroll(function () {
//     // console.log('scrolled top:', $(window).scrollTop());
//     if ($(window).scrollTop() > 0) {
//         // console.log("Hi!");
//         $('header').addClass('sticky');
//     }else{
//         $('header').removeClass('sticky');
//     }
// })


// Portfolio
const portfolioModals = document.querySelectorAll(".portfolio_model");
const imgCards = document.querySelectorAll(".img_card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio_close_btn");

var portfolioModal = function (modalClick) {
    portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        portfolioModal(i);
    })
})

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
    portfolioCloseBtn.addEventListener("click", () => {
        portfolioModals.forEach((portfolioModalView) => {
            portfolioModalView.classList.remove("active");
        });
    });
})


// RWD Menu toggle
const menuBtn = document.querySelector(".nav_menu_btn");
const closeBtn = document.querySelector(".nav_close_btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav_items a");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
})

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
})

// 按下後關閉navigation
navItem.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigation.classList.remove("active");
    });
})


// Swiper
// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Scroll reveal animations
// Common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance: '60px',
    duraction: 2500,
    delay: 100
});

//Target elements, and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section_title_01, .section_title_02', { deley: 500, origin: 'left' });
ScrollReveal().reveal('.home .info h3, .home .info p, .about_info .btn', { deley: 600, origin: 'right' });
ScrollReveal().reveal('.home .info .btn, .scroll_down', { deley: 700, origin: 'bottom' });
ScrollReveal().reveal('.media_icons i', { deley: 500, origin: 'left', interval: 150 });
ScrollReveal().reveal('.home_img, .about_img', { deley: 500, origin: 'bottom' });
ScrollReveal().reveal('.about .description', { deley: 600, origin: 'right' });
ScrollReveal().reveal('.about .professional_list li', { deley: 500, origin: 'right', interval: 150 });
ScrollReveal().reveal('.skills_description, .contact_card', { deley: 700, origin: 'left' });
ScrollReveal().reveal('.mySwiper', { deley: 800, origin: 'left', interval: 150 });
ScrollReveal().reveal('.experience_card,.education,.portfolio .img_card', { deley: 800, origin: 'bottom', interval: 150 });
ScrollReveal().reveal('.footer_container .group', { deley: 500, origin: 'top', interval: 150 });

// 
particlesJS("particles-js", { "particles": { "number": { "value": 25, "density": { "enable": true, "value_area": 1000 } }, "color": { "value": "#939393" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#9d9d9d" }, "polygon": { "nb_sides": 3 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.6814501258678471, "random": true, "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false } }, "size": { "value": 8, "random": true, "anim": { "enable": false, "speed": 4, "size_min": 0.3, "sync": false } }, "line_linked": { "enable": false, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 1, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 600 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "bubble" }, "onclick": { "enable": true, "mode": "repulse" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 }, "repulse": { "distance": 400, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function () { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;