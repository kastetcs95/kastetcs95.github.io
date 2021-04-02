/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
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



/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": () => (/* binding */ tabs)
/* harmony export */ });
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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");



document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello");
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__.tabs)();
    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__.menu)();
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map