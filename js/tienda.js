document.addEventListener('DOMContentLoaded', () => {
    // búsqueda de botones
    const botonesComprar = document.querySelectorAll('.btn-comprar');
    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (event) => {
            
            const botonClickeado = event.target;

            const item = {
                id: botonClickeado.dataset.id,
                titulo: botonClickeado.dataset.name,
                // float = precio en numeros
                precio: parseFloat(botonClickeado.dataset.price),
                imagen: botonClickeado.dataset.image,
                cantidad: 1
            };

            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            //prod en carrito
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
});