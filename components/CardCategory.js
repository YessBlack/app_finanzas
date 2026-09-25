import { CATEGORY_ICONS } from "../constants/categories.js";

export const CardCategory = (category, monto) => {
  const icon = CATEGORY_ICONS[category] || "fa-tag";

  return `
    <div class="cardCategoria">
      <div class="categoriaIcon">
        <i class="fa-solid ${icon}"></i>
      </div>
      <div class="categoriaInfo">
        <p class="categoriaTitle">${category}</p>
        <p class="categoriaPrecio">$ <span>${monto}</span></p>
      </div>
    </div>
  `;
};
