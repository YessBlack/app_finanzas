import { getGastos } from "../utils/utils.js";

let renderAppCallback = null;

export const setRenderAppCallback = (callback) => {
  renderAppCallback = callback;
};

export const getRenderAppCallback = () => {
  return renderAppCallback;
};

export const eliminarMovimiento = () => {
  const list = document.getElementById("list");

  if (!list) {
    console.error("No se encontró el elemento list");
    return;
  }

  list.addEventListener("click", (event) => {
    const button = event.target.closest(".btnDelete");

    if (!button) return;

    const id = button.dataset.id;

    const gastos = getGastos();

    const gastosActualizados = gastos.filter(
      (gasto) => gasto.id !== id
    );

    localStorage.setItem(
      "gastos",
      JSON.stringify(gastosActualizados)
    );

    if (renderAppCallback) {
      renderAppCallback();
    }
  });
};

export const registrarMovimiento = () => {
  const btnRegistrar = document.getElementById("btnRegistrar");

  btnRegistrar.addEventListener("click", (event) => {
    event.preventDefault();

    const descripcion = document.getElementById("description").value;
    const monto = document.getElementById("monto").value;
    const categoria = document.getElementById("categoria").value;

    if (descripcion.trim() === "") {
      return alert("Debes ingresar una descripción");
    }

    if (monto.trim() === "" || isNaN(Number(monto))) {
      return alert("Debes ingresar un monto válido");
    }

    const data = {
      id: crypto.randomUUID(),
      descripcion,
      monto: Number(monto),
      categoria,
      fecha: new Date().toISOString(),
    };

    const gastos = getGastos();

    gastos.push(data);

    localStorage.setItem(
      "gastos",
      JSON.stringify(gastos)
    );

    if (renderAppCallback) {
      renderAppCallback();
    }

    document.getElementById("description").value = "";
    document.getElementById("monto").value = "";
    document.getElementById("categoria").value = "Comida";
  });
};
