document.addEventListener('DOMContentLoaded', () => {

    // verf - login
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const rutaLogin = '/pages/login.html'; 

    // si te logueaste bien
    if (!isLoggedIn) {
        console.warn('Usuario no logueado. Redireccionando a login.');
        window.location.href = rutaLogin;
        return; 
    }

    // botón logout
    const buttonContainer = document.getElementById('navbar-buttons');

    if (buttonContainer) {
        const logoutButton = document.createElement('a');
        logoutButton.href = '#'; 
        logoutButton.id = 'logout-button'; 
        logoutButton.textContent = 'Cerrar Sesión'; 
        logoutButton.className = 'nav-button';
        buttonContainer.appendChild(logoutButton);

        // función
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault();
            console.log('Cerrando sesión...');
            localStorage.removeItem('isLoggedIn');            
            // redirección
            window.location.href = rutaLogin;
        });

    } else {
        console.error('No se encontró el elemento #navbar-buttons. Revisa que el ID esté bien puesto en tu HTML.');
    }
});