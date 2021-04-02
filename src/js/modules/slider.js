const slider = () => {

const prev = document.querySelector(".slider__prev"),
      next = document.querySelector(".slider__next"),
      item = document.querySelectorAll(".slider__item");

let counter = 0, countSlides = 0;

    function initSlider() {
        item.forEach((item,i) => {
            countSlides++;
              if (i == 0) {
                  item.classList.add("slider__item-active");
              }
          })
    }
      
    initSlider();

      function changeSlide(j) {
        item.forEach((item,i) => {
            if (i == j) {
                item.classList.add("slider__item-active");
            } else {
                item.classList.remove("slider__item-active");
            }
        })
      }

      next.addEventListener('click', () => {
          if (counter == countSlides-1) {
              counter = 0;
          } else{
              counter++;
          }
        changeSlide(counter);
      })

      prev.addEventListener('click', () => {
        if (counter == 0) {
            counter = countSlides-1;
        } else{
            counter--;
        }
        changeSlide(counter);
      })
}

export {slider};