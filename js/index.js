// importar fetch
import { fetchProductos } from './dataService.js'; 

document.addEventListener('DOMContentLoaded', async () => {
    
    const scrollerInner = document.querySelector('.scroller__inner');

    if (!scrollerInner) {
        console.log("Contenedor del carrusel (.scroller__inner) no encontrado. Saliendo de index.js.");
        return; 
    }

    try {
        // obtener productos .json
        const allProducts = await fetchProductos(); 
        renderizarCarrusel(allProducts, scrollerInner); 
        iniciarLogicaCarrusel(scrollerInner);

    } catch (error) {
        console.error("Fallo al cargar el carrusel:", error);
        scrollerInner.innerHTML = '<li>Error al cargar las novedades.</li>';
    }

        // renderizar items del carrusel
        function renderizarCarrusel(products, container) {
            container.innerHTML = '';
            
            products.forEach(product => {
            const productCard = document.createElement('li'); 
            // para q no me muestre el precio raro
            const precioFormateado = product.precio.toLocaleString('es-AR', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
                
                productCard.innerHTML = `
                    <div class="product-card">
                        <img src="${product.imagen}" alt="${product.titulo}" class="card-image">
                        <div class="card-body">
                            <p class="card-artist">${product.artista}</p>
                            <h3 class="card-title">${product.titulo}</h3>
                            <p class="card-price">$${precioFormateado}</p>
                            <button class="btn-add btn-comprar" 
                                    data-id="${product.id}" 
                                    data-name="${product.titulo.trim()}" 
                                    data-price="${product.precio}" 
                                    data-image="${product.imagen}">
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                `;
                container.appendChild(productCard);
            });
        }

    // función de duplicado
    function iniciarLogicaCarrusel(scrollerInner) {
        
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });

        const botonesComprar = document.querySelectorAll('.scroller__inner .btn-comprar');
        
        const anadirAlCarrito = (event) => {
            const botonClickeado = event.target;
            const rutaImagenOriginal = botonClickeado.dataset.image;
            
            // corrección de ruta
            const rutaImagenCorregida = rutaImagenOriginal.replace('./', '../'); 
            
            const item = {
                id: botonClickeado.dataset.id,
                titulo: botonClickeado.dataset.name,
                precio: parseFloat(botonClickeado.dataset.price),
                imagen: rutaImagenCorregida, 
                cantidad: 1 
            };

            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            const productoEnCarrito = carrito.find(p => p.id === item.id);

            if (productoEnCarrito) {
                productoEnCarrito.cantidad++;
            } else {
                carrito.push(item);
            }

            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert(`¡"${item.titulo}" fue añadido al carrito!`);
        };

        botonesComprar.forEach(boton => {
            boton.addEventListener('click', anadirAlCarrito);
        });
    }

});