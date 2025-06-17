// Estado global para mantener los datos modificados
let globalExtensionsData = null;

export async function data() {
  try {
    // Si ya tenemos datos en memoria, los devolvemos
    if (globalExtensionsData) {
      return globalExtensionsData;
    }

    // Solo cargamos del JSON la primera vez
    const response = await fetch("./data/data.json");
    const data = await response.json();

    // Guardamos los datos en el estado global
    globalExtensionsData = data;
    return globalExtensionsData;
  } catch (error) {
    console.log(error);
  }
}

// Función para actualizar el estado de una extensión
export function updateExtensionStatus(id, newStatus) {
  if (globalExtensionsData) {
    const extension = globalExtensionsData.find((item) => item.id == id);
    if (extension) {
      extension.isActive = newStatus;
    }
  }
}

// Función para eliminar una extensión
export function removeExtension(id) {
  if (globalExtensionsData) {
    globalExtensionsData = globalExtensionsData.filter((item) => item.id != id);
  }
}

// Función para obtener datos filtrados
export function getFilteredData(filter) {
  if (!globalExtensionsData) return [];

  switch (filter) {
    case "active":
      return globalExtensionsData.filter((item) => item.isActive);
    case "inactive":
      return globalExtensionsData.filter((item) => !item.isActive);
    default:
      return globalExtensionsData;
  }
}
