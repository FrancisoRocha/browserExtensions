import { renderCars } from "./render.js";
import {
  updateExtensionStatus,
  removeExtension,
  getFilteredData,
} from "./api.js";

export const setCardEvents = () => {
  //Boton de REMOVE
  const btnRemove = document.querySelectorAll(".btn__remove");

  btnRemove.forEach((remove) => {
    remove.addEventListener("click", (e) => {
      const card = e.target.closest(".cards");
      const id = card.dataset.id;

      // Actualizar el estado global
      removeExtension(parseInt(id));

      // Re-renderizar con el filtro actual
      const activeFilter =
        document.querySelector(".btn__filter.select")?.dataset.filter || "all";
      const filteredData = getFilteredData(activeFilter);
      renderCars(filteredData);
    });
  });

  // Switch activo/inactivo
  const switchToggle = document.querySelectorAll(".status-switch");

  switchToggle.forEach((toggle) => {
    toggle.addEventListener("change", (e) => {
      const card = e.target.closest(".cards");
      const id = parseInt(card.dataset.id);
      const newStatus = e.target.checked;

      // Actualizar el estado global
      updateExtensionStatus(id, newStatus);

      console.log(`ID: ${id} => Nuevo estado: ${newStatus}`);

      // Re-renderizar con el filtro actual
      const activeFilter =
        document.querySelector(".btn__filter.select")?.dataset.filter || "all";
      const filteredData = getFilteredData(activeFilter);
      renderCars(filteredData);
    });
  });
};
