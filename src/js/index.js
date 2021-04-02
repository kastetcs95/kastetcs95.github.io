import {tabs} from "./modules/tabs";
import {menu} from "./modules/menu";
import {slider} from './modules/slider';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Hello");
    tabs();
    menu();
    slider();
})