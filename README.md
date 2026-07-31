# Mis Finanzas Personales

Aplicación web para el control y gestión de gastos personales con una interfaz moderna y fácil de usar.

## Características

- 📊 **Registro de gastos**: Agrega gastos con descripción, monto y categoría
- 📈 **Resumen en tiempo real**: Visualiza gastos del día y del mes actual
- 🏷️ **Categorización**: Organiza tus gastos en 5 categorías (Comida, Transporte, Entretenimiento, Servicios, Otros)
- 💾 **Persistencia local**: Los datos se guardan automáticamente en localStorage
- 🗑️ **Gestión de transacciones**: Elimina gastos que ya no necesites
- 📱 **Diseño responsive**: Funciona en diferentes tamaños de pantalla
- 🎨 **Interfaz moderna**: Diseño limpio con colores profesionales

## Tecnologías

- **HTML5**: Estructura semántica
- **CSS3**: Estilos con variables CSS para fácil personalización
- **JavaScript (ES6+)**: Lógica de la aplicación sin frameworks
- **Font Awesome**: Iconos para la interfaz
- **Google Fonts**: Tipografía Roboto

## Estructura del proyecto

```
LAB_AppFinanzas/
├── components/
│   └── CardGasto.js          # Componente para mostrar un gasto individual
├── constants/
│   └── categories.js         # Definición de categorías
├── index.html                # Página principal
├── script.js                 # Lógica principal de la aplicación
├── style.css                 # Estilos de la aplicación
└── README.md                 # Documentación
```

## Instalación

1. Clona el repositorio:
```bash
git clone <tu-repositorio>
cd LAB_AppFinanzas
```

2. Abre el archivo `index.html` directamente en tu navegador

**Opcional - Para una mejor experiencia de desarrollo:**

- Usa la extensión **Live Server** en VS Code (clic derecho en index.html → "Open with Live Server")
- O cualquier otra extensión de servidor local en tu editor de código preferido

## Uso

1. **Registrar un gasto**:
   - Ingresa una descripción (ej: "Café con amigos")
   - Ingresa el monto (ej: 15.50)
   - Selecciona una categoría
   - Haz clic en "Registrar Gasto"

2. **Ver resúmenes**:
   - Las tarjetas superiores muestran el gasto del día y del mes
   - Las tarjetas de categorías muestran el total por cada categoría

3. **Eliminar un gasto**:
   - Haz clic en el botón de eliminar (icono de basura) junto al gasto

## Personalización

### Colores

Puedes personalizar los colores editando las variables CSS en `style.css`:

```css
:root {
  --primary-color: #3dbffc;
  --secondary-color: #051d2b;
  --background: #f0f9ff;
  /* ... otras variables */
}
```

### Categorías

Para agregar o modificar categorías, edita el archivo `constants/categories.js` y actualiza el HTML en `index.html`.

## Características futuras

- [ ] Gráficos de gastos
- [ ] Exportación de datos
- [ ] Filtros por fecha
- [ ] Edición de gastos
- [ ] Modo oscuro
- [ ] Persistencia en base de datos

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## Autor

Desarrollado como proyecto de gestión de finanzas personales.
