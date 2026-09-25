import { getGastosByFilter } from "../utils/utils.js";
import { getFilterActive } from "./filters.js";
import { CardCategory } from "../components/CardCategory.js";

export const renderCategories = () => {
  const container = document.getElementById("gastosByCategory")

  const gastos = getGastosByFilter(getFilterActive())

  if (gastos.length === 0) {
    container.innerHTML = `
      <div class="empty">
        <p>Aún no tienes movimientos registrados</p>
      </div>
    `;
    return
  }

  const categorias = gastos.reduce((acc, gasto) => {
    acc[gasto.categoria] =
      (acc[gasto.categoria] || 0) + gasto.monto;
    return acc;
  }, {})

  container.innerHTML = Object.entries(categorias)
    .map(([categoria, monto]) =>
      CardCategory(categoria, monto)
    )
    .join("")
};
