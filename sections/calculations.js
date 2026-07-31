import {
  getGastos,
  getGastosByDay,
  getGastosByMonth,
} from "../utils/utils.js";

export const calcularGastoByFecha = () => {
  const gastoDia = document.getElementById("gastoDia");
  const gastoMes = document.getElementById("gastoMes");
  const gastoTodos = document.getElementById("gastoTodos");

  const gastos = getGastos();

  const montoDia = getGastosByDay(gastos).reduce(
    (acc, gasto) => acc + gasto.monto,
    0
  );

  const montoMes = getGastosByMonth(gastos).reduce(
    (acc, gasto) => acc + gasto.monto,
    0
  );

  const montoTodos = gastos.reduce(
    (acc, gasto) => acc + gasto.monto,
    0
  );

  gastoDia.textContent = montoDia;
  gastoMes.textContent = montoMes;
  gastoTodos.textContent = montoTodos;
};
