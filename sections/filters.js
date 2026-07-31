import { setRenderAppCallback as setRenderAppCallbackActions, getRenderAppCallback } from "./actions.js";

let filterActive = "todos";

export const getFilterActive = () => {
  return filterActive;
};

export const setFilterActive = (filter) => {
  filterActive = filter;
};

export const setRenderAppCallback = (callback) => {
  setRenderAppCallbackActions(callback);
};

export const filtersGastos = () => {
  const filters = document.getElementById("filtersCards");

  if (!filters) {
    console.error("No se encontró el elemento filtersCards");
    return;
  }

  const cards = filters.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();

      setFilterActive(card.dataset.id);

      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const renderAppCallback = getRenderAppCallback();
      if (renderAppCallback) {
        renderAppCallback();
      }
    });
  });
};
