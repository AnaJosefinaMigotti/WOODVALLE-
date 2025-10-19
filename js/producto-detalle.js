document.addEventListener('DOMContentLoaded', () => {

    // 1. LEE EL ID DE LA URL
    const params = new URLSearchParams(window.location.search);
    const productoId = params.get('id');
    
    // --- PRUEBA 1 ---
    console.log('--- PRUEBA 1 ---');
    console.log('ID de la URL (productoId):', productoId);
    console.log('Tipo de dato del ID (URL):', typeof productoId); // (Debería ser "string")

    if (!productoId) {
        window.location.href = '/index.html';
        return;
    }

    // --- PRUEBA 2 ---
    console.log('--- PRUEBA 2 ---');
    console.log('Base de datos (BBDD_PRODUCTOS):', BBDD_PRODUCTOS); // (Debería ser un array largo)
    if (BBDD_PRODUCTOS && BBDD_PRODUCTOS.length > 0) {
         console.log('ID del primer producto en BBDD:', BBDD_PRODUCTOS[0].id);
         console.log('Tipo de dato del ID (BBDD):', typeof BBDD_PRODUCTOS[0].id); // (¿Es "string" o "number"?)
    }

    // 2. BUSCA EL PRODUCTO EN LA BBDD
    const producto = BBDD_PRODUCTOS.find(p => p.id == productoId); // Usamos '=='

    // --- PRUEBA 3 ---
    console.log('--- PRUEBA 3 ---');
    console.log('Producto encontrado:', producto); // (¡No debería ser "undefined"!)

    if (!producto) {
        document.querySelector('.detalle-producto-container').innerHTML = '<h1>Producto no encontrado</h1>';
        return;
    }

    // 3. RELLENA EL HTML (¡Aquí está la magia!)
    // --- PRUEBA 4 ---
    console.log('--- PRUEBA 4 ---');
    console.log('¡Producto encontrado! Rellenando el HTML...');
    
    document.getElementById('producto-imagen').src = producto.imagen;
    document.getElementById('producto-imagen').alt = producto.titulo;
    document.getElementById('producto-titulo').textContent = producto.titulo;
    document.getElementById('producto-artista').textContent = producto.artista;
    // document.getElementById('producto-sku').textContent = producto.sku; 
    document.getElementById('producto-precio').textContent = `$${producto.precio.toLocaleString('es-AR')}`; 
    document.getElementById('producto-descripcion').textContent = producto.descripcion_larga;

    // 4. LÓGICA DEL SELECTOR DE CANTIDAD
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

    // 5. LÓGICA DEL BOTÓN "Añadir al Carrito"
    document.getElementById('add-to-cart-detalle').addEventListener('click', () => {
        const cantidad = inputQuantity.value;
        alert(`¡Añadiste ${cantidad} "${producto.titulo}" al carrito!`);
    });
});