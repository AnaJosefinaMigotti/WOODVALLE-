document.addEventListener('DOMContentLoaded', () => {

    const allProducts = [
        { id: 1, artist: 'Taylor Swift', name: 'The Life of a Showgirl (So Glamorous)', price: 37030, image: './assets/tlosga.webp' },
        { id: 2, artist: 'Taylor Swift', name: 'The Life of a Showgirl (Dressing Room)', price: 37030, image: './assets/tlosgr.webp' },
        { id: 5, artist: 'La Mona Jimenez', name: 'UN LOCO BOHEMIO DE LA NOCHE', price: 29900, image: './assets/mn.webp' },
        { id: 7, artist: 'AC/DC', name: 'Highway to Hell (Vinyl 50th - Orange)', price: 136999, image: './assets/acdc.webp' },
        { id: 9, artist: 'Taylor Swift', name: 'Speak Now (Taylor\'s Version) (Three-LP set)', price: 185398, image: './assets/sntl.webp' },
        { id: 14, artist: 'Paramore', name: 'Brand New Eyes (Dylan\'s Version)', price: 79900, image: './assets/pr.webp' },
        { id: 18, artist: 'Lana del Rey', name: 'Ultraviolence (Double Vinyl)', price: 137799, image: './assets/uv.webp' },
        { id: 22, artist: 'Pescado Rabioso', name: 'Artaud (Standar Vinyl)', price: 41372, image: './assets/ar.webp' },
        { id: 24, artist: 'Las Pastillas del Abuelo', name: 'Crisis (CD Estandar)', price: 23299, image: './assets/lpda.webp' }
        
    ];

    function displayRandomProducts() {
        const container = document.getElementById('random-products-grid');
        if (!container) return; 

        const shuffled = allProducts.sort(() => 0.5 - Math.random());
        
        const selectedProducts = shuffled.slice(0, 4);

        let productsHTML = ''; 

        selectedProducts.forEach(product => {
            productsHTML += `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="card-image">
                    <div class="card-body">
                        <p class="card-artist">${product.artist}</p>
                        <h3 class="card-title">${product.name}</h3>
                        <p class="card-price">$${product.price.toLocaleString('es-AR')}</p>
                        <button class="btn-add" 
                                data-id="${product.id}" 
                                data-name="${product.name}" 
                                data-price="${product.price}" 
                                data-image="${product.image}">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            `;
        });

        container.innerHTML = productsHTML;
    }

    displayRandomProducts();
});