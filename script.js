import { CardGasto } from "./components/CardGasto.js"

const handleEliminarGasto = () => {
  const lista = document.getElementById("listGastos")

  lista.addEventListener("click", (e) => {
    const boton = e.target.closest(".delete-btn")

    if (!boton) return;

    const id = boton.dataset.id
    let gastos = JSON.parse(localStorage.getItem("gastos")) || [];

    gastos = gastos.filter(gasto => gasto.id !== id)
    localStorage.setItem("gastos", JSON.stringify(gastos))
    renderGastos()
    renderResumen()
    renderGastosCategoria()
  })
}

const handleRegistrarGasto = () => {
  const addItem = document.getElementById('addItem')

  addItem.addEventListener('click', () => {
    const descripcion = document.getElementById('descripción').value
    const monto = Number(document.getElementById('monto').value)
    const categoria = document.getElementById('categoria').value

    if (descripcion.trim() === '') {
      alert('Debes ingresar una descripción')
      return
    }

    if (isNaN(monto) || monto <= 0) {
      alert('Debes ingresar un monto válido')
      return
    }

    const gasto = {
      id: crypto.randomUUID(),
      descripcion,
      monto,
      categoria,
      fecha: new Date().toISOString()
    }

    const gastos = JSON.parse(localStorage.getItem('gastos')) || []

    gastos.push(gasto)

    localStorage.setItem('gastos', JSON.stringify(gastos))

    renderGastos()
    renderResumen()
    renderGastosCategoria()

    document.getElementById('descripción').value = ''
    document.getElementById('monto').value = ''
    document.getElementById('categoria').selectedIndex = 0
  })
}
const utilGasto = (gastos) => {
  const total = gastos.reduce(
    (accumulator, currentValue) => accumulator + currentValue.monto,
    0
  )

  return total
}

const renderGastosCategoria = () => {
  const gastos = JSON.parse(localStorage.getItem('gastos')) || []

  const gastosComida = gastos.filter(el => el.categoria === 'Comida')
  const gastosTransporte = gastos.filter(el => el.categoria === 'Transporte')
  const gastoEntretenimiento = gastos.filter(el => el.categoria === 'Entretenimiento')
  const gastoServicios = gastos.filter(el => el.categoria === 'Servicios')
  const gastoOtros = gastos.filter(el => el.categoria === 'Otros')

  document.getElementById('gastoComida').textContent = utilGasto(gastosComida)
  document.getElementById('gastoTransporte').textContent = utilGasto(gastosTransporte)
  document.getElementById('gastoEntretenimiento').textContent = utilGasto(gastoEntretenimiento)
  document.getElementById('gastoServicios').textContent = utilGasto(gastoServicios)
  document.getElementById('gastoOtros').textContent = utilGasto(gastoOtros)
}

const renderGastos = () => {
  const lista = document.getElementById("listGastos")

  const gastos = JSON.parse(localStorage.getItem("gastos")) || []

  if (gastos.length === 0) {
    lista.innerHTML = `
      <li class="empty-state">
        No hay gastos registrados.
      </li>
    `;

    return
  }

  lista.innerHTML = gastos
    .map(gasto => CardGasto(gasto))
    .join("")
}

const renderResumen = () => {
  const gastos = JSON.parse(localStorage.getItem("gastos")) || []

  const hoy = new Date()

  let totalHoy = 0
  let totalMes = 0

  gastos.forEach(gasto => {
    const fecha = new Date(gasto.fecha);
    console.log('fecha ', fecha)

    if (
      fecha.getMonth() === hoy.getMonth() &&
      fecha.getFullYear() === hoy.getFullYear()
    ) {
      totalMes += gasto.monto
    }

    if (
      fecha.getDate() === hoy.getDate() &&
      fecha.getMonth() === hoy.getMonth() &&
      fecha.getFullYear() === hoy.getFullYear()
    ) {
      totalHoy += gasto.monto
    }
  });

  document.getElementById("todayExpense").textContent =
    `$${totalHoy.toFixed(2)}`

  document.getElementById("monthExpense").textContent =
    `$${totalMes.toFixed(2)}`
};

handleRegistrarGasto()
renderGastos()
renderResumen()
handleEliminarGasto()
renderGastosCategoria()
