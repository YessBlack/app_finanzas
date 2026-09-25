export const CardGasto = (gasto) => {
  const fecha = new Date(gasto.fecha).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  return `
    <div class="item">
      <div class="icon">
        <i class="fa-solid fa-star"></i>
      </div>

      <div class="info">
        <p>${gasto.descripcion}</p>
        <span class="categoria">${gasto.categoria}</span>
        <span class="fecha">${fecha}</span>
      </div>

      <p class="precio">$${gasto.monto}</p>

      <button
        class="btnDelete"
        data-id="${gasto.id}">
          <i class="fa-solid fa-trash"></i>
      </button>
    </div>
  `
}
