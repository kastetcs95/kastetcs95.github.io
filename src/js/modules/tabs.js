const tabs = () => {
    const skillsList = document.querySelector(".skills__list"),
          skillsItems = document.querySelectorAll(".skills__item"),
          tabs = document.querySelectorAll(".skills__tab");

    skillsList.addEventListener('click', (e) => {
        skillsItems.forEach((item, i) => {
            
            if (item == e.target) {
                showActiveItem(skillsItems, "skills__item-active", i);
                showActiveItem(tabs, "skills__tab-active", i);
            }
        })
    })

    function showActiveItem(elements, activeSelector, i = 0) {
        elements.forEach((item, j) => {
            if (i == j) {

                item.classList.add(activeSelector);
            }
            else {
                item.classList.remove(activeSelector);
            }
        })
    }
    showActiveItem(skillsItems, "skills__item-active");
    showActiveItem(tabs, "skills__tab-active");
}

export {tabs};