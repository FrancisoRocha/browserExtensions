import { data } from "./api.js";
import { renderCars } from "./render.js";

export const btnFilters = document.querySelectorAll(".btn__filter");

// Función para aplicar tema a botones después del filtrado
const applyThemeToFilterButtons = () => {
    const isDark = document.body.classList.contains("dark");
    const filterButtons = document.querySelectorAll(".btn__filter");

    filterButtons.forEach((btn) => {
        if (isDark) {
            btn.classList.add("dark");
            btn.classList.remove("light");
        } else {
            btn.classList.add("light");
            btn.classList.remove("dark");
        }
    });
};

// FILTROS
btnFilters.forEach((filterBtn) => {
    filterBtn.addEventListener("click", async () => {
        btnFilters.forEach((btn) => btn.classList.remove("select"));

        filterBtn.classList.add("select");

        const filterValue = filterBtn.dataset.filter;
        const allData = await data();

        if (filterValue === "all") {
            await renderCars(allData);
        } else if (filterValue === "active") {
            await renderCars(allData.filter((item) => item.isActive));
        } else if (filterValue === "inactive") {
            await renderCars(allData.filter((item) => !item.isActive));
        }

        // Asegurar que los botones mantengan el tema correcto después del filtrado
        applyThemeToFilterButtons();
    });
});
