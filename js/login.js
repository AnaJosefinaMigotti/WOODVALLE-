document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('formularioLogin');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        // prueba
        const emailValido = 'usuario@woodvalle.com';
        const passwordValido = '12345';

        if (email === emailValido && password === passwordValido) {
            // login hecho
            localStorage.setItem('isLoggedIn', 'true');
            // redirección
            window.location.href = '../index.html';

        } else {
            //mensaje error
            errorMessage.textContent = 'Email o contraseña incorrectos.';
            errorMessage.style.display = 'block'; 
        }
    });

});