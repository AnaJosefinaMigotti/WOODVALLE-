// ===================================================================
// === 1. FUNCIONES DE SESIÓN Y GESTIÓN DE DATOS (REUTILIZABLES) ===
// ===================================================================

/**
 * Obtiene los datos del usuario logueado de sessionStorage.
 * @returns {Object|null} El objeto del usuario si existe, o null.
 */
function obtenerUsuarioLogueado() {
    const userJSON = sessionStorage.getItem('usuarioLogueado');
    return userJSON ? JSON.parse(userJSON) : null;
}

/**
 * Cierra la sesión y redirige al login.
 * @param {string} loginPath - La ruta relativa a login.html.
 */
function cerrarSesion(loginPath) {
    sessionStorage.removeItem('usuarioLogueado');
    alert("Has cerrado la sesión.");
    window.location.href = loginPath; 
}

/**
 * Redirige a la página de detalle del producto.
 * @param {string} productoId - El ID único del producto a ver.
 */
function verProducto(productoId) {
    // 1. Verificar si estoy en la carpeta /pages/ (para la ruta relativa)
    const estoyEnPages = window.location.pathname.includes('/pages/');
    const base = estoyEnPages ? '../' : '';
    
    // 2. Construir la URL de destino usando el ID como parámetro
    // Se asume que producto.html está dentro de la carpeta /pages/
    const urlDestino = `${base}pages/producto.html?id=${productoId}`;
    
    // 3. Redirigir al usuario
    window.location.href = urlDestino;
}

// --- Funciones del Carrito (Usando localStorage) ---

/**
 * Obtiene el array de productos del carrito desde localStorage.
 * @returns {Array<Object>} El array del carrito, o vacío si no hay.
 */
function obtenerCarrito() {
    return JSON.parse(localStorage.getItem('carrito')) || [];
}

/**
 * Agrega un producto al carrito o incrementa su cantidad.
 * @param {Object} producto - Objeto con detalles del producto (id, nombre, precio).
 */
function agregarAlCarrito(producto) {
    let carrito = obtenerCarrito();
    
    // Buscar si el producto ya existe
    const index = carrito.findIndex(item => item.id === producto.id);

    if (index > -1) {
        // Si existe, incrementa la cantidad
        carrito[index].cantidad = (carrito[index].cantidad || 1) + 1;
    } else {
        // Si es nuevo, lo agrega con cantidad 1
        producto.cantidad = 1;
        carrito.push(producto);
    }

    // Guardar el carrito actualizado
    localStorage.setItem('carrito', JSON.stringify(carrito));
    console.log(`Producto '${producto.nombre}' agregado/actualizado en el carrito.`);
}

// ===================================================================
// === 2. LÓGICA DE NAVEGACIÓN Y SESIÓN AL CARGAR EL DOM (main.js) ===
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    const usuario = obtenerUsuarioLogueado();
    const navButtonsContainer = document.querySelector('.nav-buttons-group');
    
    // Ruta base (detectar si estoy en /pages/)
    const estoyEnPages = window.location.pathname.includes('/pages/');
    const base = estoyEnPages ? '../' : '';
    const loginUrl = base + 'pages/login.html';

    // --- 2.1. Configuración de la Navbar ---
    
    // Lista de enlaces que se muestran siempre o solo si no está logueado
    let paginasDelSitio = [
        { titulo: 'Inicio',  url: base + 'index.html' },
        { titulo: 'Tienda',  url: base + 'pages/tienda.html' },
        { titulo: 'Carrito', url: base + 'pages/carrito.html' },
    ];

    if (!usuario) {
        // Añadir Login y Registro solo si NO hay sesión
        paginasDelSitio.push(
            { titulo: 'Login',   url: loginUrl },
            { titulo: 'Registro',url: base + 'pages/registro.html' }
        );
    }

    if (navButtonsContainer) {
        
        // 2.1.1. Creación de enlaces dinámicos
        paginasDelSitio.forEach(pagina => {
            const link = document.createElement('a');
            link.href = pagina.url;
            link.textContent = pagina.titulo;
            
            // Estilo y botón activo
            link.classList.add('nav-button');
            if (pagina.titulo === 'Inicio') {
                link.classList.add('dark-button', 'home-button');
            }

            const rutaActual = window.location.pathname.split('/').pop();
            const rutaDestino = pagina.url.split('/').pop();
            // Lógica para marcar el botón activo
            if (rutaActual === rutaDestino || 
                (rutaActual === '' && pagina.titulo === 'Inicio') // Maneja el caso de la URL raíz
            ) {
                link.classList.add('active'); 
            }

            navButtonsContainer.appendChild(link);
        });

        // --- 2.2. Lógica de Sesión Activa (Saludo y Logout) ---
        
        if (usuario) {
            
            const logoutButton = document.createElement('a');
            logoutButton.href = '#';
            logoutButton.id = 'btn-logout';
            logoutButton.textContent = 'Cerrar Sesión';
            logoutButton.classList.add('nav-button'); 
            navButtonsContainer.appendChild(logoutButton);

            // Lógica de click para el botón de logout
            logoutButton.addEventListener('click', (event) => {
                event.preventDefault(); 
                cerrarSesion(loginUrl);
            });
        }
    } 
});