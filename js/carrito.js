document.addEventListener('DOMContentLoaded', () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartCount = document.getElementById('cart-count');
    const cartTableBody = document.querySelector('.cart-table tbody');
    const cartSummary = document.querySelector('.cart-summary');
    
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-add')) {
            const button = e.target;
            const id = button.dataset.id;
            const name = button.dataset.name;
            const price = parseInt(button.dataset.price, 10);
            const image = button.dataset.image;

            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ id, name, price, image, quantity: 1 });
            }

            saveCart();
            updateCartCount();
            alert(`"${name}" fue añadido al carrito!`);
        }
    });

    function updateCartCount() {
        if (cartCount) {
            cartCount.textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
        }
    }
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    function renderCart() {
        if (!cartTableBody || !cartSummary) return;

        cartTableBody.innerHTML = '';

        if (cart.length === 0) {
            cartTableBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Tu carrito está vacío.</td></tr>';
            cartSummary.style.display = 'none';
            return;
        }

        cartSummary.style.display = 'block';

        let subtotal = 0;

       cart.forEach(item => {
            const imagePath = item.image.startsWith('./') ? item.image.replace('./', '../') : item.image;

            const row = document.createElement('tr');
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            row.innerHTML = `
                <td>
                    <div class="cart-product">
                        <img src="${imagePath}" alt="${item.name}">
                        <div class="cart-product-info">
                            <h4>${item.name}</h4>
                        </div>
                    </div>
                </td>
                <td>$${item.price.toLocaleString('es-AR')}</td>
                <td class="cart-quantity">
                    <input type="number" value="${item.quantity}" min="1" data-id="${item.id}" class="quantity-input">
                </td>
                <td>$${itemTotal.toLocaleString('es-AR')}</td>
                <td>
                    <button class="remove-btn" data-id="${item.id}" style="cursor:pointer; border:none; background:transparent; font-size: 1.2rem; color: var(--text-color);">
                        🗑️
                    </button>
                </td>
            `;
            cartTableBody.appendChild(row);
        });

        const shipping = 5000;
        const total = subtotal + shipping;

        document.getElementById('subtotal').textContent = `$${subtotal.toLocaleString('es-AR')}`;
        document.getElementById('shipping').textContent = `$${shipping.toLocaleString('es-AR')}`;
        document.getElementById('total').textContent = `$${total.toLocaleString('es-AR')}`;
    }
    
    if(cartTableBody){
        cartTableBody.addEventListener('change', (e) => {
            if (e.target.classList.contains('quantity-input')) {
                const id = e.target.dataset.id;
                const newQuantity = parseInt(e.target.value, 10);
                
                const itemToUpdate = cart.find(item => item.id === id);
                if(itemToUpdate){
                    itemToUpdate.quantity = newQuantity > 0 ? newQuantity : 1;
                    e.target.value = itemToUpdate.quantity;
                }

                saveCart();
                renderCart();
                updateCartCount();
            }
        });

        cartTableBody.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {
                const id = e.target.dataset.id;
                cart = cart.filter(item => item.id !== id);
                saveCart();
                renderCart();
                updateCartCount();
            }
        });
    }

    updateCartCount();
    if (window.location.pathname.includes('carrito.html')) {
        renderCart();
    }
});