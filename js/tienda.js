
import { fetchProductos } from './dataservice.js';

document.addEventListener('DOMContentLoaded', async () => {
    
    const productosContainer = document.getElementById('tienda-productos-container'); 
    if (!productosContainer) return; 

    let todosLosProductos = []; 

    try {
        // obtener productos
        todosLosProductos = await fetchProductos(); 
        
        // html en card
        renderizarCardsTienda(todosLosProductos); 

        // lódiga de botones
        iniciarLogicaBotones(todosLosProductos); 

    } catch (error) {
        console.error("Fallo al cargar la Tienda:", error);
        productosContainer.innerHTML = '<p class="error-msg">Error: No se pudieron cargar los productos de la tienda. Asegúrate de que data/producto.json existe.</p>';
    }

    // recrea la estructura q tenía antes
    function renderizarCardsTienda(productos) {
        productosContainer.innerHTML = ''; 

        productos.forEach(producto => {
        // para q no se vea raro
        const precioFormateado = producto.precio.toLocaleString('es-AR', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

            // recrea mi card
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

    // lógica de botones
    function iniciarLogicaBotones(productosDisponibles) {
        const botonesComprar = document.querySelectorAll('.btn-comprar');
        botonesComprar.forEach(boton => {
            boton.addEventListener('click', (event) => {
                const botonClickeado = event.target;

                // lógica del carrito
                const item = {
                    id: botonClickeado.dataset.id,
                    titulo: botonClickeado.dataset.name,
                    // string a num
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