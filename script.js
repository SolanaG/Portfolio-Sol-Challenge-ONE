document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("contactoForm");
  const nombreInput = document.getElementById("nombre");
  const emailInput = document.getElementById("email");
  const mensajeInput = document.getElementById("mensaje");
  const enviarBtn = document.getElementById("enviarBtn");

  const nombreError = document.getElementById("nombreError");
  const emailError = document.getElementById("emailError");
  const mensajeError = document.getElementById("mensajeError");

  // Función para validar el nombre completo
  function esNombreCompleto(nombre) {
    const partes = nombre.trim().split(" ");
    return partes.length >= 2;
  }

  // Función para validar el formulario
  function validarFormulario() {
    const nombreValido = esNombreCompleto(nombreInput.value);
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
    const mensajeValido = mensajeInput.value.trim() !== "";

    // Mostrar u ocultar mensajes de error
    if (!nombreValido) {
      nombreError.textContent = "Por favor, ingresa tu nombre completo.";
      nombreError.style.display = "block";
    } else {
      nombreError.style.display = "none";
    }

    if (!emailValido) {
      emailError.textContent =
        "Por favor, ingresa un correo electrónico válido.";
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }

    if (!mensajeValido) {
      mensajeError.textContent = "El mensaje no puede estar vacío.";
      mensajeError.style.display = "block";
    } else {
      mensajeError.style.display = "none";
    }

    // Habilitar o deshabilitar el botón de enviar
    enviarBtn.disabled = !(nombreValido && emailValido && mensajeValido);
  }

  nombreInput.addEventListener("input", validarFormulario);
  emailInput.addEventListener("input", validarFormulario);
  mensajeInput.addEventListener("input", validarFormulario);

  // Manejo del envío del formulario
  formulario.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el envío por defecto

    // Resetear el formulario
    formulario.reset();
    enviarBtn.disabled = true;
    // Ocultar mensajes de error
    nombreError.style.display = "none";
    emailError.style.display = "none";
    mensajeError.style.display = "none";
  });
});
