document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('formularioLogin');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        // credencial dde prueba
        const emailValido = 'usuario@woodvalle.com';
        const passwordValido = '12345';
        
        // datos del usuario que se guardarán en sesión
        const datosUsuario = {
            id: '1', 
            nombre: 'Woodvalle User',
            email: emailValido 
        };

        if (email === emailValido && password === passwordValido) {
            // login hecho
            sessionStorage.setItem('usuarioLogueado', JSON.stringify(datosUsuario)); 
            window.location.href = '../index.html';

        } else {
            // mensaje de error
            errorMessage.textContent = 'Email o contraseña incorrectos.';
            errorMessage.style.display = 'block'; 
        }
    });

});