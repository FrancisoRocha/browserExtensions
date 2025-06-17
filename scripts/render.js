import { data } from "./api.js";
import { setCardEvents } from "./cardsActions.js";
import { applyCurrentTheme } from "./darkMode.js";

export const renderCars = async (filterData = null) => {
    const items = filterData || (await data());

    const cardsContainer = document.querySelector(".extension__card");
    const isDark = document.body.classList.contains("dark");
    cardsContainer.innerHTML = "";

    items.forEach(({ id, logo, name, description, isActive }) => {
        const cards = document.createElement("DIV");
        cards.classList.add("cards");
        cards.dataset.id = id;

        const themeClass = isDark ? "dark" : "light";

        cards.innerHTML = `
        <div class="info__card">
            <img src="${logo}" alt="${name}" class="icon__card">
            <div class="info">
                <p class="title__card ${themeClass}">${name}</p>
                <p class="text__card ${themeClass}">${description}</p>
            </div>
            <!-- BOTONES -->
            <div class="buttons__card">
                <button class="btn__remove ${themeClass}">Remove</button>
                <label class="switch">
                <input type="checkbox" class="status-switch" ${isActive ? "checked" : ""}>
                <span class="slider"></span>
                </label>
            </div>
        </div>`;

        // Aplicar clases de tema al contenedor principal
        cards.classList.add(themeClass);
        cardsContainer.appendChild(cards);
    });
    setCardEvents();
    // Aplicar tema a todos los elementos después de renderizar
    setTimeout(() => {
        applyCurrentTheme();
    }, 0);
};
