import { data } from "./api.js"
import { renderCars } from "./render.js";
import './darkMode.js';

document.addEventListener('DOMContentLoaded', () => {

    data();
    renderCars();

})


