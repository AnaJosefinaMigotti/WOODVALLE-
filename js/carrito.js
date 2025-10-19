document.addEventListener('DOMContentLoaded', () => {

    const tbody = document.querySelector('.cart-table tbody');
    const subtotalSpan = document.getElementById('subtotal');
    const shippingSpan = document.getElementById('shipping');
    const totalSpan = document.getElementById('total');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    function renderizarCarrito() {
        
        tbody.innerHTML = '';        
        // x si el carrito está vacío
        if (carrito.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align: center;">Tu carrito está vacío.</td></tr>';
            actualizarTotales(0);
            return;
        }

        let granTotal = 0;

        carrito.forEach(producto => {
            const subtotalProducto = producto.precio * producto.cantidad;
            granTotal += subtotalProducto;

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td class="cart-product">
                    <img src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="cart-product-info">
                        <h4>${producto.titulo}</h4>
                    </div>
                </td>
                <td>$${producto.precio.toLocaleString('es-AR')}</td>
                <td class="cart-quantity">
                    <input type="number" value="${producto.cantidad}" min="1" data-id="${producto.id}" class="cantidad-input">
                </td>
                <td>$${subtotalProducto.toLocaleString('es-AR')}</td>
                <td>
                    <button class="carrito-boton-eliminar" data-id="${producto.id}">X</button>
                </td>
            `;
            
            tbody.appendChild(tr);
        });

        actualizarTotales(granTotal);
        
        agregarEventosEliminar();
        agregarEventosCantidad();
    }

    function actualizarTotales(subtotal) {
        const costoEnvio = 0;
        subtotalSpan.textContent = `$${subtotal.toLocaleString('es-AR')}`;
        shippingSpan.textContent = `$${costoEnvio.toLocaleString('es-AR')}`;
        totalSpan.textContent = `$${(subtotal + costoEnvio).toLocaleString('es-AR')}`;
    }

    // btn eliminar
    function agregarEventosEliminar() {
        const botonesEliminar = document.querySelectorAll('.carrito-boton-eliminar');
        botonesEliminar.forEach(boton => {
            boton.addEventListener('click', (e) => {
                const idEliminar = e.target.getAttribute('data-id');
                const nuevoCarrito = carrito.filter(p => p.id !== idEliminar);
                localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
                window.location.reload(); 
            });
        });
    }

    // cantidad
    function agregarEventosCantidad() {
        const inputsCantidad = document.querySelectorAll('.cantidad-input');
        inputsCantidad.forEach(input => {
            input.addEventListener('change', (e) => {
                const idActualizar = e.target.getAttribute('data-id');
                const nuevaCantidad = parseInt(e.target.value);
                
                const producto = carrito.find(p => p.id === idActualizar);
                if (producto && nuevaCantidad > 0) {
                    producto.cantidad = nuevaCantidad;
                } else if (producto && nuevaCantidad <= 0) {
                     e.target.value = 1;
                     producto.cantidad = 1;
                }
                
                localStorage.setItem('carrito', JSON.stringify(carrito));
                renderizarCarrito();
            });
        });
    }
    renderizarCarrito();
});