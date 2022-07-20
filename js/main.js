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
    $(".load").css("transform", "translateY(-100vh)");

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


