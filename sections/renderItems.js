import { getGastosByFilter } from "../utils/utils.js";
import { getFilterActive } from "./filters.js";
import { CardGasto } from "../components/CardGasto.js";

export const renderItems = () => {
  const list = document.getElementById("list")

  const gastos = getGastosByFilter(getFilterActive())

  if (gastos.length === 0) {
    list.innerHTML = `
      <div class="empty">
        <p>No hay movimientos registrados</p>
      </div>
    `;

    return
  }

  list.innerHTML = gastos
    .map((gasto) => CardGasto(gasto))
    .join("");
};
