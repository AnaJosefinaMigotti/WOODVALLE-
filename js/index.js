document.addEventListener('DOMContentLoaded', () => {

    /* productos del carrusel */
    
    const allProducts = [
     { id: 1, artist: 'Taylor Swift', name: 'The Life of a Showgirl (So Glamorous Cabaret Version)', price: 37030, image: './assets/tlosga.webp' },
     { id: 2, artist: 'Taylor Swift', name: 'The Life of a Showgirl (Dressing Room Rehearsal Version)', price: 37030, image: './assets/tlosgr.webp' },
     { id: 3, artist: 'Taylor Swift', name: 'The Life of a Showgirl (Alone in my Tower Acoustic Version)', price: 37030, image: './assets/tlosgro.webp' },
     { id: 4, artist: 'Taylor Swift', name: 'The Life of a Showgirl (Life is a Song Acoustic Version)', price: 37030, image: './assets/tlosgv.webp' },
     { id: 5, artist: 'La Mona Jimenez', name: "UN LOCO BOHEMIO DE LA NOCHE (CD 1) (Torito's Version)", price: 29900, image: './assets/mn.webp' },
     { id: 6, artist: 'ERA', name: "ERA (Vinyl Couleur)", price: 56117, image: './assets/era.webp' },
     { id: 7, artist: 'AC/DC', name: "Highway to Hell (Vinyl 50th - Orange)", price: 136999, image: './assets/acdc.webp' },
     { id: 8, artist: 'La Mona Jiménez', name: "Gracias a Dios (CD)", price: 19771, image: './assets/gd.jpg' },
     { id: 9, artist: 'Taylor Swift', name: "Speak Now (Taylor's Version) (Three-LP set)", price: 185398, image: './assets/sntl.webp' },
     { id: 10, artist: 'Taylor Swift', name: "Speak Now (Taylor's Version) (CD Standar)", price: 22079, image: './assets/spcd.webp' },
     { id: 11, artist: 'Taylor Swift', name: "Midnights: Jade Green Edition Vinyl ", price: 109500, image: './assets/mj.webp' },
     { id: 12, artist: 'Taylor Swift', name: "Midnights: Lavender Edition Vinyl ", price: 109500, image: './assets/ml.webp' },
     { id: 13, artist: 'Avril Lavigne', name: "Under My Skin (Vinyl Standard)", price: 57900, image: './assets/AL6.webp' },
     { id: 14, artist: 'Paramore', name: "Brand New Eyes (Vinyl Standard)", price: 79900, image: './assets/pr.webp' },
     { id: 15, artist: 'Sabrina Carpenter', name: "Short n' Sweet (Standard LP)", price: 84991, image: './assets/sns.webp' },
     { id: 16, artist: 'Travis Scott', name: "Rodeo (Expanded Edition) (CD)", price: 44991, image: './assets/tsr.webp' },
     { id: 17, artist: 'Mumford and Sons', name: "Sigh No More: Limited Clear Vinyl LP", price: 89991, image: './assets/mas.webp' },
     { id: 18, artist: 'Lana del Rey', name: "Ultraviolence (Double Vinyl) (Standard)", price: 137799, image: './assets/uv.webp' },
     { id: 19, artist: 'EMINEM', name: "The Eminem Show (Standar Vinyl)", price: 61601, image: './assets/en.webp' },
     { id: 20, artist: 'Morat', name: "Si ayer fuera hoy (Standar Vinyl)", price: 46989, image: './assets/morat.webp' },
     { id: 21, artist: 'Patricio Rey y sus Redonditos de Ricota', name: "Oktubre (Standar Vinyl)", price: 65500, image: './assets/r.webp' },
     { id: 22, artist: 'Pescado Rabioso', name: "Artaud (Standar Vinyl)", price: 41372, image: './assets/ar.webp' },
     { id: 23, artist: 'Kendrick Lamar', name: "GNX (Exclusive White Vinyl)", price: 49500, image: './assets/k.webp' },
     { id: 24, artist: 'Las Pastillas del Abuelo', name: "Crisis (CD Estandar)", price: 23299, image: './assets/lpda.webp' }
    ];

    const scrollerInner = document.querySelector('.scroller__inner');

    if (scrollerInner) {
        /*carga */
        allProducts.forEach(product => {
            const productCard = document.createElement('li'); 
            allProducts.sort(() => Math.random() - 0.5);
            productCard.innerHTML = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}" class="card-image">
                    <div class="card-body">
                        <p class="card-artist">${product.artist}</p>
                        <h3 class="card-title">${product.name}</h3>
                        <p class="card-price">$${product.price.toLocaleString('es-AR')}</p>
                        <button class="btn-add btn-comprar" 
                                data-id="${product.id}" 
                                data-name="${product.name.trim()}" data-price="${product.price}" 
                                data-image="${product.image}">
                            Añadir al Carrito
                        </button>
                    </div>
                </div>
            `;
            scrollerInner.appendChild(productCard);
        });

        /* duplicado */
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });

        const botonesComprar = document.querySelectorAll('.btn-comprar');
        const anadirAlCarrito = (event) => {
            const botonClickeado = event.target;
            const rutaImagenOriginal = botonClickeado.dataset.image;
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