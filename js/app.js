"use strict";

//  Burger menu

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle("_lock");
        iconMenu.classList.toggle("_active");
        menuBody.classList.toggle("_active");
    });
}

// Прокрутка по клику

const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        let menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            let gotoBlock = document.querySelector(menuLink.dataset.goto);
            let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY;

            if (iconMenu.classList.contains("_active")) {
                document.body.classList.remove("_lock");
                iconMenu.classList.remove("_active");
                menuBody.classList.remove("_active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
            e.preventDefault();
        }
    }
}

// jquery slider
$(document).ready(function () {
    $(".twitter-slider__body").slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
    });
});

// Scroll arrow to top of the page (elem #arrowToTop, add attr hidden)

if (document.querySelector("#arrowToTop")) {
    window.addEventListener("scroll", function () {
        if (scrollY > document.documentElement.clientHeight) {
            arrowToTop.hidden = false;
        } else arrowToTop.hidden = true;
    });

    arrowToTop.addEventListener("click", scrollToTop);

    function scrollToTop(event) {
        let targetElem = event.target.closest("#arrowToTop");

        if (targetElem) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }
}
