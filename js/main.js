//sesiones
/**
 * datos logueados
 * @returns {Object|null} 
 */
function obtenerUsuarioLogueado() {
    const userJSON = sessionStorage.getItem('usuarioLogueado');
    return userJSON ? JSON.parse(userJSON) : null;
}

/**
 * redirige
 * @param {string} loginPath 
 */
function cerrarSesion(loginPath) {
    sessionStorage.removeItem('usuarioLogueado');
    alert("Has cerrado la sesión.");
    window.location.href = loginPath; 
}

/**
 * 
 * @param {string} productoId - 
 */
function verProducto(productoId) {
    const estoyEnPages = window.location.pathname.includes('/pages/');
    const base = estoyEnPages ? '../' : '';
    const urlDestino = `${base}pages/producto.html?id=${productoId}`;
    window.location.href = urlDestino;
}

// carrito

/**
 * localstorage
 * @returns {Array<Object>} 
 */
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

/**
 * 
 * @param {Object} producto 
 */
function agregarAlCarrito(producto) {
    let carrito = obtenerCarrito();
    const index = carrito.findIndex(item => item.id === producto.id);

    if (index > -1) {
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
        producto.cantidad = 1;
        carrito.push(producto);
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(`Producto '${producto.nombre}' agregado/actualizado en el carrito.`);
}

// navegación

document.addEventListener('DOMContentLoaded', () => {
    
    const usuario = obtenerUsuarioLogueado();
    const navButtonsContainer = document.querySelector('.nav-buttons-group');
    const estoyEnPages = window.location.pathname.includes('/pages/');
    const base = estoyEnPages ? '../' : '';
    const loginUrl = base + 'pages/login.html';

    // navbar
    let paginasDelSitio = [
        { titulo: 'Inicio',  url: base + 'index.html' },
        { titulo: 'Tienda',  url: base + 'pages/tienda.html' },
        { titulo: 'Carrito', url: base + 'pages/carrito.html' },
    ];

    if (!usuario) {
        // login y registro si no hay sesion
        paginasDelSitio.push(
            { titulo: 'Login',   url: loginUrl },
            { titulo: 'Registro',url: base + 'pages/registro.html' }
        );
    }

    if (navButtonsContainer) {
        
        // enlaces dinámicos
        paginasDelSitio.forEach(pagina => {
            const link = document.createElement('a');
            link.href = pagina.url;
            link.textContent = pagina.titulo;
            
            // botón
            link.classList.add('nav-button');
            if (pagina.titulo === 'Inicio') {
                link.classList.add('dark-button', 'home-button');
            }

            const rutaActual = window.location.pathname.split('/').pop();
            const rutaDestino = pagina.url.split('/').pop();
            // botón activo
            if (rutaActual === rutaDestino || 
                (rutaActual === '' && pagina.titulo === 'Inicio') 
            ) {
                link.classList.add('active'); 
            }

            navButtonsContainer.appendChild(link);
        });

        // lógica sesión activa
        
        if (usuario) {
            
            const logoutButton = document.createElement('a');
            logoutButton.href = '#';
            logoutButton.id = 'btn-logout';
            logoutButton.textContent = 'Cerrar Sesión';
            logoutButton.classList.add('nav-button'); 
            navButtonsContainer.appendChild(logoutButton);

            // boton logout
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault(); 
                cerrarSesion(loginUrl);
            });
        }
    } 
});