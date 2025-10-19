document.addEventListener('DOMContentLoaded', () => {

    // lee el df
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');
    
    // prueba
    console.log('--- PRUEBA 1 ---');
    console.log('ID de la URL (productoId):', productoId);
    console.log('Tipo de dato del ID (URL):', typeof productoId); 

    if (!productoId) {
        window.location.href = '/index.html';
        return;
    }

    // 2prueba
    console.log('--- PRUEBA 2 ---');
    console.log('Base de datos (BBDD_PRODUCTOS):', BBDD_PRODUCTOS);
    if (BBDD_PRODUCTOS && BBDD_PRODUCTOS.length > 0) {
         console.log('ID del primer producto en BBDD:', BBDD_PRODUCTOS[0].id);
         console.log('Tipo de dato del ID (BBDD):', typeof BBDD_PRODUCTOS[0].id); 
    }

    // producto en bdd
    const producto = BBDD_PRODUCTOS.find(p => p.id == productoId); 

    // 3prueba
    console.log('--- PRUEBA 3 ---');
    console.log('Producto encontrado:', producto); 

    if (!producto) {
        document.querySelector('.detalle-producto-container').innerHTML = '<h1>Producto no encontrado</h1>';
        return;
    }

    // relleno html
    console.log('--- PRUEBA 4 ---');
    console.log('¡Producto encontrado! Rellenando el HTML...');
    
    document.getElementById('producto-imagen').src = producto.imagen;
    document.getElementById('producto-imagen').alt = producto.titulo;
    document.getElementById('producto-titulo').textContent = producto.titulo;
    document.getElementById('producto-artista').textContent = producto.artista;
    document.getElementById('producto-precio').textContent = `$${producto.precio.toLocaleString('es-AR')}`; 
    document.getElementById('producto-descripcion').textContent = producto.descripcion_larga;

    const btnDecrease = document.getElementById('quantity-decrease');
    const btnIncrease = document.getElementById('quantity-increase');
    const inputQuantity = document.getElementById('quantity-input');

    btnIncrease.addEventListener('click', () => {
        inputQuantity.value = parseInt(inputQuantity.value) + 1;
    });

    btnDecrease.addEventListener('click', () => {
        let val = parseInt(inputQuantity.value);
        if (val > 1) {
            inputQuantity.value = val - 1;
        }
    });

    // botón
    document.getElementById('add-to-cart-detalle').addEventListener('click', () => {
    const cantidad = parseInt(inputQuantity.value);
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    // id cd
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        productoEnCarrito.cantidad += cantidad;
    } else {
        const itemParaCarrito = {
            id: producto.id,
            titulo: producto.titulo,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: cantidad 
        };
        carrito.push(itemParaCarrito);
    }

    // guardar carrito
    localStorage.setItem('carrito', JSON.stringify(carrito));
    
    // alerta
    alert(`¡Añadiste ${cantidad} "${producto.titulo}" al carrito!`);
});
});