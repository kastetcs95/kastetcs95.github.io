const menu = () => {
    const burger = document.querySelector(".promo__burger"),
          burgerSpan = document.querySelectorAll(".promo__burger span"),
          menuWrapper = document.querySelector(".menu"),
          menuLink = document.querySelectorAll(".menu__link"),
          menuBlock = document.querySelector(".menu__block");
    function hideMenu(element) {
        element.classList.add("slideHide");
        element.classList.remove("slideShow");
        burgerSpan.forEach(item => {
            item.classList.remove("promo__burger-active");
        })
    }

    burger.addEventListener('click', () => {
        menuWrapper.classList.remove("slideHide");
        menuWrapper.classList.add("slideShow");
        burgerSpan.forEach(item => {
            item.classList.add("promo__burger-active");
        })
        
    })

    menuWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains("menu")) {
            hideMenu(e.target);
        }
    })

    menuBlock.addEventListener('click', (e) => {
        menuLink.forEach((item) => {
            if (e.target == item) {
               hideMenu(menuWrapper);
            }
        })
    })
}

export {menu};