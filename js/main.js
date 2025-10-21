document.addEventListener('DOMContentLoaded', () => {

    // datos pag - navbar */
    const paginasDelSitio = [
      { titulo: 'Inicio', url: '/index.html' },
      { titulo: 'Tienda', url: '/pages/tienda.html' },
      { titulo: 'Carrito', url: '/pages/carrito.html' },
      { titulo: 'Login', url: '/pages/login.html' },
      { titulo: 'Registro', url: '/pages/registro.html' }
    ];
    const navButtonsContainer = document.querySelector('.nav-buttons-group');

    if (navButtonsContainer) {
        paginasDelSitio.forEach(pagina => {
            const link = document.createElement('a');
            link.href = pagina.url;
            link.textContent = pagina.titulo;
            // estilo btn
            link.classList.add('nav-button');
            if (pagina.titulo === 'Inicio') {
                link.classList.add('dark-button', 'home-button');
            }
            navButtonsContainer.appendChild(link);
        });

        // dinámica - logout 
        const logoutButton = document.createElement('a');
        logoutButton.href = '#';
        logoutButton.id = 'btn-logout';
        logoutButton.textContent = 'Cerrar Sesión';
        // estilo btn
        logoutButton.classList.add('nav-button'); 
        navButtonsContainer.appendChild(logoutButton);

        // lógica btn
        logoutButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            localStorage.removeItem('usuarioLogueado'); 
            alert("Has cerrado la sesión.");
            window.location.href = '/pages/login.html';
        });
    } 

});