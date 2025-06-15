//* DARK MODE

export const btnMode = document.querySelector(".btn__mode");

// Función para aplicar tema a todos los elementos existentes
const applyThemeToAllElements = (isDark) => {
    // CAMBIO DE HEADER
    const header = document.querySelector(".header");
    if (header) {
        header.classList.toggle("dark", isDark);
        header.classList.toggle("light", !isDark);
    }

    // LOGO
    const logo = document.querySelector(".icon");
    if (logo) {
        logo.src = isDark
            ? "./assets/images/logo-ligth.svg"
            : "./assets/images/logo.svg";
    }

    // BUTTON TOGGLE
    const btnToggle = document.querySelector(".btn__mode");
    if (btnToggle) {
        btnToggle.classList.toggle("dark", isDark);
        btnToggle.classList.toggle("light", !isDark);
    }

    // ICON TOGGLE
    const iconToggle = document.querySelector(".icon-theme");
    if (iconToggle) {
        iconToggle.src = isDark
            ? "./assets/images/icon-sun.svg"
            : "./assets/images/icon-moon.svg";
    }

    // TITLE
    const title = document.querySelector(".filter__title");
    if (title) {
        title.classList.toggle("dark", isDark);
        title.classList.toggle("light", !isDark);
    }

    // BUTTONS FILTERS
    const btnFilters = document.querySelectorAll(".btn__filter");
    if (btnFilters.length > 0) {
        btnFilters.forEach((btns) => {
            btns.classList.toggle("dark", isDark);
            btns.classList.toggle("light", !isDark);
        });
    }

    //CARDS
    const cards = document.querySelectorAll(".cards");
    if (cards.length > 0) {
        cards.forEach((card) => {
            card.classList.toggle("dark", isDark);
            card.classList.toggle("light", !isDark);
        });
    }

    // TITLE CARD
    const titleCard = document.querySelectorAll(".title__card");
    if (titleCard.length > 0) {
        titleCard.forEach((title) => {
            title.classList.toggle("dark", isDark);
            title.classList.toggle("light", !isDark);
        });
    }

    // TEXT CARD
    const textCard = document.querySelectorAll(".text__card");
    if (textCard.length > 0) {
        textCard.forEach((text) => {
            text.classList.toggle("dark", isDark);
            text.classList.toggle("light", !isDark);
        });
    }

    // BUTTON REMOVE
    const buttonRemove = document.querySelectorAll(".btn__remove");
    if (buttonRemove.length > 0) {
        buttonRemove.forEach((remove) => {
            remove.classList.toggle("dark", isDark);
            remove.classList.toggle("light", !isDark);
        });
    }
};

// Función exportada para aplicar tema desde otros módulos
export const applyCurrentTheme = () => {
    const isDark = document.body.classList.contains("dark");
    applyThemeToAllElements(isDark);
};

btnMode.addEventListener("click", () => {
    // CAMBIO DEL BACKGROUND BODY
    const bodyDark = document.body;
    bodyDark.classList.toggle("dark");
    bodyDark.classList.toggle("light");

    const isDark = document.body.classList.contains("dark");
    applyThemeToAllElements(isDark);
});
