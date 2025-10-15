const formulario = document.getElementById('formularioRegistro');
const mensajeError = document.getElementById('mensajeError');
const soloLetrasRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;


formulario.addEventListener('submit', function(evento) {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const fecha = document.getElementById('fecha').value.trim();

    mensajeError.textContent = '';

    // verificación - letras nombre
    if (!soloLetrasRegex.test(nombre)) {
        evento.preventDefault(); 
        mensajeError.textContent = 'Este campo solo puede contener letras.';
        document.getElementById('nombre').focus();
        return; 
    }

    // verificación - letras apellido
    if (!soloLetrasRegex.test(apellido)) {
        evento.preventDefault(); 
        mensajeError.textContent = 'Este campo solo puede contener letras.';
        document.getElementById('apellido').focus();
        return;
    }
  
    //verificación - campos vacíos
    if (nombre === '' || apellido === '' || email === '' || password === '' || fecha === '') {
        evento.preventDefault(); //frenar 
        mensajeError.textContent = 'Rellenar todos los campos.';
        if (nombre === '') document.getElementById('nombre').focus();
    } 
    
    // verificación - contraseña
    else if (password.length < 6) {
        evento.preventDefault();
        mensajeError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        document.getElementById('password').focus();

    } 
});