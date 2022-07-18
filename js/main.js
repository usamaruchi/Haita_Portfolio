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
const 


