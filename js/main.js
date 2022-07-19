// Load
// .nextpage_btn 按鈕
$(function () {
    setTimeout(function () {
        $(".nextpage_btn").show();
    }, 5000);

    setTimeout(function () {
        $("#load_video").hide();
    }, 8000);

})

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
    })
})

