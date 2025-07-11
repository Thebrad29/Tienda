function mostrarAlerta() {
  alert("¡Esta es una alerta generada por JavaScript!");
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}


function mostrarAlertaCorreo() {
  const correo = document.getElementById('correoUsuario').value;
  if (correo === '') {
    alert("Por favor, escribe tu correo.");
  } else {
    alert("Gracias por suscribirte: " + correo);
  }
}
