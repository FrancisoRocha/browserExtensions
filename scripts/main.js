import { data } from "./api.js"
import { renderCars } from "./render.js";
import './darkMode.js';
import './filters.js'

document.addEventListener('DOMContentLoaded', () => {

    data();
    renderCars();

})


