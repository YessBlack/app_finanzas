import { renderCategories } from "./sections/renderCategories.js";
import { renderItems } from "./sections/renderItems.js";
import { filtersGastos, setRenderAppCallback } from "./sections/filters.js";
import { calcularGastoByFecha } from "./sections/calculations.js";
import { eliminarMovimiento, registrarMovimiento } from "./sections/actions.js";

const renderApp = () => {
  calcularGastoByFecha();
  renderItems();
  renderCategories();
};

document.addEventListener("DOMContentLoaded", () => {
  setRenderAppCallback(renderApp);
  renderApp();
  registrarMovimiento();
  eliminarMovimiento();
  filtersGastos();
});
