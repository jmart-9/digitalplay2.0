// Abrir / Cerrar menú hamburguesa
document.getElementById("menu-toggle").addEventListener("click", () => {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});
// Detectar clicks dentro del menú y cerrarlo si se hace en un enlace
document.addEventListener("click", function (e) {
  const menu = document.getElementById("mobile-menu");
  // Si el menú está abierto y se hace click dentro de él
  if (!menu.classList.contains("hidden") && menu.contains(e.target)) {
    // Cerrar el menú si el click no fue en el botón hamburguesa
    if (!e.target.closest("#menu-toggle")) {
      menu.classList.add("hidden");
    }
  }
});
