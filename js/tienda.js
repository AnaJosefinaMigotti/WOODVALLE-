/// Archivo: js/tienda.js

// **IMPORTANTE:** Debes tener este archivo y la función listos:
import { fetchProductos } from './dataservice.js';

document.addEventListener('DOMContentLoaded', async () => {
    
    const productosContainer = document.getElementById('tienda-productos-container'); 
    if (!productosContainer) return; // Se asegura de que estamos en tienda.html

    let todosLosProductos = []; // Guardaremos aquí el array completo

    try {
        // 1. FETCH: Obtener todos los productos del JSON
        todosLosProductos = await fetchProductos(); 
        
        // 2. RENDERIZAR: Insertar el HTML de las tarjetas
        renderizarCardsTienda(todosLosProductos); 

        // 3. LISTENERS: Adjuntar tu lógica de botones (la función que reemplazaremos)
        // Pasamos el array fetchado para que pueda usarse en el carrito si es necesario
        iniciarLogicaBotones(todosLosProductos); 

    } catch (error) {
        console.error("Fallo al cargar la Tienda:", error);
        productosContainer.innerHTML = '<p class="error-msg">Error: No se pudieron cargar los productos de la tienda. Asegúrate de que data/producto.json existe.</p>';
    }

    // --- FUNCIÓN DE RENDERIZADO ---
    // Esta función recrea la estructura que tenías en tienda.html
    function renderizarCardsTienda(productos) {
        productosContainer.innerHTML = ''; 

        productos.forEach(producto => {
            const precioFormateado = (producto.precio / 100).toFixed(2); 

            // Recreamos tu card, usando los datos del objeto (sin la descripción larga)
            productosContainer.innerHTML += `
                <div class="product-card" data-id="${producto.id}" data-categoria="${producto.categoria}">
                    <img src="${producto.imagen}" alt="${producto.titulo}" class="card-image">
                    <div class="card-body">
                        <p class="card-artist">${producto.artista}</p>
                        <h3 class="card-title">${producto.titulo}</h3>
                        <p class="card-price">\$${precioFormateado}</p>
                        <a href="/pages/producto.html?id=${producto.id}" class="btn-add"> Ver Producto</a>
                        
                        <button class="btn-add btn-comprar"
                                data-id="${producto.id}"
                                data-name="${producto.titulo.trim()}" 
                                data-price="${producto.precio}" 
                                data-image="${producto.imagen}">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            `;
        });
    }

    // --- TU LÓGICA DE BOTONES ENCAPSULADA ---
    // Esta es tu lógica original de tienda.js, pero se ejecuta aquí, DESPUÉS de renderizar.
    function iniciarLogicaBotones(productosDisponibles) {
        
        // La búsqueda de botones ahora funciona porque ya existen en el DOM
        const botonesComprar = document.querySelectorAll('.btn-comprar');
        
        botonesComprar.forEach(boton => {
            boton.addEventListener('click', (event) => {
                
                const botonClickeado = event.target;

                // Tu lógica de carrito original (usa data-attributes del botón)
                const item = {
                    id: botonClickeado.dataset.id,
                    titulo: botonClickeado.dataset.name,
                    // float = precio en numeros. Lo parsea de string a número
                    precio: parseFloat(botonClickeado.dataset.price),
                    imagen: botonClickeado.dataset.image,
                    cantidad: 1
                };

                let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

                // prod en carrito
                const productoEnCarrito = carrito.find(p => p.id === item.id);
                
                // si ya está + 1
                if (productoEnCarrito) {
                    productoEnCarrito.cantidad++;
                } else {
                    carrito.push(item);
                }
                
                localStorage.setItem('carrito', JSON.stringify(carrito));
                
                // aviso
                alert(`¡"${item.titulo}" fue añadido al carrito!`);
            });
        });
    }
});