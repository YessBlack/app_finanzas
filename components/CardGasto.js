export const CardGasto = (gasto) => {
  return `
    <li class="expense-item">
      <div class="expense-icon">
        <i class="fa-solid fa-money-bill-wave"></i>
      </div>

      <div class="expense-info">
        <p class="expense-name">${gasto.descripcion}</p>
        <p class="expense-category">${gasto.categoria}</p>
        <p class="expense-category">${gasto.fecha.slice(0, -14)}</p>
      </div>

      <span class="expense-amount">$${gasto.monto}</span>

      <button
        class="delete-btn"
        data-id="${gasto.id}"
        aria-label="Eliminar">
        <i class="fa-solid fa-trash"></i>
      </button>
    </li>
  `;
};