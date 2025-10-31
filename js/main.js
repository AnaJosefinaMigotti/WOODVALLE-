document.addEventListener('DOMContentLoaded', () => {

    // datos pag - navbar 
    // detectar si estoy en /pages/
    const estoyEnPages = window.location.pathname.includes('/pages/');
    const base = estoyEnPages ? '../' : '';

    const paginasDelSitio = [
        { titulo: 'Inicio',  url: base + 'index.html' },
        { titulo: 'Tienda',  url: base + 'pages/tienda.html' },
        { titulo: 'Carrito', url: base + 'pages/carrito.html' },
        { titulo: 'Login',   url: base + 'pages/login.html' },
        { titulo: 'Registro',url: base + 'pages/registro.html' }
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

            // btn activo - marca la página actual
            const rutaActual = window.location.pathname.split('/').pop();
            const rutaDestino = pagina.url.split('/').pop();
            if (rutaActual === rutaDestino) {
                link.classList.add('active'); // clase para el botón actual
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
            window.location.href = base + 'pages/login.html';
        });
    } 

});