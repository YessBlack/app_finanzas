export const getGastosByDay = (gastos) => {
  const hoy = new Date()

  return gastos.filter(gasto => {
    const fecha = new Date(gasto.fecha)

    return (
      fecha.getDate() === hoy.getDate() &&
      fecha.getMonth() === hoy.getMonth() &&
      fecha.getFullYear() === hoy.getFullYear()
    )
  })
}

export const getGastosByMonth = (gastos) => {
  const hoy = new Date()

  const gastosByMes = gastos.filter(gasto => {
    const fecha = new Date(gasto.fecha)

    const isMonthEquals = fecha.getMonth() === hoy.getMonth()
    const isYearEquals = fecha.getFullYear() === hoy.getFullYear()

    return isMonthEquals && isYearEquals
  })

  return gastosByMes
}

export const getGastosByFilter = (filter) => {
  const gastos = getGastos();

  switch (filter) {
    case "dia":
      return getGastosByDay(gastos);

    case "mes":
      return getGastosByMonth(gastos);

    default:
      return gastos;
  }
}

export const getGastos = () => {
  return JSON.parse(localStorage.getItem("gastos")) || [];
}