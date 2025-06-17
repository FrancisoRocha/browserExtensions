import { data } from "./api.js";
import { renderCars } from "./render.js";
import "./darkMode.js";
import "./filters.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Cargar los datos iniciales
  const initialData = await data();

  // Renderizar las tarjetas con todos los datos
  renderCars(initialData);

  // Marcar el botón "All" como seleccionado por defecto
  const allButton = document.querySelector('.btn__filter[data-filter="all"]');
  if (allButton) {
    allButton.classList.add("select");
  }
});
