// Ayudas para escribir en los formularios (portal y panel).

// CUIT: se escriben solo los números y los guiones se ponen solos → 20-12345678-9
for (const campo of document.querySelectorAll("input[data-cuit]")) {
  const formatear = () => {
    const d = campo.value.replace(/\D/g, "").slice(0, 11);
    let texto = d.slice(0, 2);
    if (d.length > 2) texto += "-" + d.slice(2, 10);
    if (d.length > 10) texto += "-" + d.slice(10);
    campo.value = texto;
  };
  campo.setAttribute("maxlength", "13");
  campo.addEventListener("input", formatear);
  formatear();
}

// Contraseña: botón "Ver" / "Ocultar" para revisar lo que se escribió.
for (const boton of document.querySelectorAll("button[data-ver-clave]")) {
  const campo = document.getElementById(boton.dataset.verClave);
  boton.hidden = false;
  boton.addEventListener("click", () => {
    const mostrar = campo.type === "password";
    campo.type = mostrar ? "text" : "password";
    boton.textContent = mostrar ? "Ocultar" : "Ver";
    boton.setAttribute("aria-pressed", String(mostrar));
    campo.focus();
  });
}
