document.addEventListener('DOMContentLoaded', () => {

    // 1. Estructura de datos (Array) para páginas
    // (Usamos rutas absolutas desde la raíz de tu sitio)
    const paginasDelSitio = [
      { titulo: 'Inicio', url: '/index.html' },
      { titulo: 'Tienda', url: '/pages/tienda.html' },
      { titulo: 'Carrito', url: '/pages/carrito.html' },
      { titulo: 'Login', url: '/pages/login.html' },
      { titulo: 'Registro', url: '/pages/registro.html' }
    ];

    // 2. Busca el contenedor del navbar en el HTML
    const navButtonsContainer = document.querySelector('.nav-buttons-group');

    // 3. Verifica si el contenedor existe en esta página
    if (navButtonsContainer) {
        
        // Dibuja los enlaces del array
        paginasDelSitio.forEach(pagina => {
            const link = document.createElement('a');
            link.href = pagina.url;
            link.textContent = pagina.titulo;
            
            // Asigna las clases CSS que ya tenías
            link.classList.add('nav-button');
            
            // Estilo especial para el botón de Inicio
            if (pagina.titulo === 'Inicio') {
                link.classList.add('dark-button', 'home-button');
            }
            
            navButtonsContainer.appendChild(link);
        });

        // 4. Crea y añade dinámicamente el botón de Logout
        const logoutButton = document.createElement('a');
        logoutButton.href = '#';
        logoutButton.id = 'btn-logout';
        logoutButton.textContent = 'Cerrar Sesión';
        logoutButton.classList.add('nav-button'); // Dale el mismo estilo
        navButtonsContainer.appendChild(logoutButton);

        // 5. Asigna la lógica de Logout (Consigna 2)
        logoutButton.addEventListener('click', (event) => {
            // Previene que el enlace '#' recargue la página
            event.preventDefault(); 
            
            // ¡IMPORTANTE! Usa la "llave" real que guardaste en el login
            localStorage.removeItem('usuarioLogueado'); 
            
            alert("Has cerrado la sesión.");
            // Redirige al login
            window.location.href = '/pages/login.html';
        });
        
    } // Fin del if (navButtonsContainer)

});