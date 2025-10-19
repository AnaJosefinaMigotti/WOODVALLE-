// info de las discas

const BBDD_PRODUCTOS = [
    {
        id: '1',
        titulo: 'The Life of a Showgirl (So Glamorous Cabaret Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosga.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto. Este texto solo se verá en la página de detalle.'
    },
    {
        id: '2',
        titulo: 'The Life of a Showgirl (Dressing Room Rehearsal Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosgr.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '3',
        titulo: 'The Life of a Showgirl (Alone in my Tower Acoustic Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosgro.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '4',
        titulo: 'The Life of a Showgirl (Life is a Song Acoustic Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosgv.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '5',
        titulo: "UN LOCO BOHEMIO DE LA NOCHE (CD 1) (Torito's Version)",
        artista: 'La Mona Jimenez',
        precio: 29900,
        imagen: '../assets/mn.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '6',
        titulo: "ERA (Eri's version) (Vinyl Couleur)",
        artista: 'ERA',
        precio: 56117,
        imagen: '../assets/era.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '7',
        titulo: "Highway to Hell (Torito's Version) (Vinyl 50th - Orange)",
        artista: 'AC/DC',
        precio: 136999,
        imagen: '../assets/acdc.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '8',
        titulo: "Gracias a Dios (Eri's version) (CD)",
        artista: 'La Mona Jiménez',
        precio: 19771,
        imagen: '../assets/gd.jpg',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '9',
        titulo: "Speak Now (Taylor's Version) (Florcita's Version) (Three-LP set)",
        artista: 'Taylor Swift',
        precio: 185398,
        imagen: '../assets/sntl.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '10',
        titulo: "Speak Now (Taylor's Version) (Florcita's Version) (CD Standar)",
        artista: 'Taylor Swift',
        precio: 22079,
        imagen: '../assets/spcd.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '11',
        titulo: "Midnights: Jade Green Edition Vinyl (Wanda's Version)",
        artista: 'Taylor Swift',
        precio: 109500,
        imagen: '../assets/mj.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '12',
        titulo: "Midnights: Lavender Edition Vinyl (Wanda's Version)",
        artista: 'Taylor Swift',
        precio: 109500,
        imagen: '../assets/ml.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '13',
        titulo: "Under My Skin (Dylan's Edition) (Vinyl Standard)",
        artista: 'Avril Lavigne',
        precio: 57900,
        imagen: '../assets/AL6.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '14',
        titulo: "Brand New Eyes (Dylan's Version) (Vinyl Standard)",
        artista: 'Paramore',
        precio: 79900,
        imagen: '../assets/pr.webp',
        descripcion_larga: 'Añade here la descripción larga para este producto.'
    },
    {
        id: '15',
        titulo: "Short n' Sweet (Indi's Version) (Standard LP)",
        artista: 'Sabrina Carpenter',
        precio: 84991,
        imagen: '../assets/sns.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '16',
        titulo: "Rodeo (Expanded Edition) (Federico's Version) (CD)",
        artista: 'Travis Scott',
        precio: 44991,
        imagen: '../assets/tsr.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '17',
        titulo: "Sigh No More: Limited Clear Vinyl LP (Cabe's Version)",
        artista: 'Mumford and Sons',
        precio: 89991,
        imagen: '../assets/mas.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '18',
        titulo: "Ultraviolence (Double Vinyl) (Standard) (Aixa's Version)",
        artista: 'Lana del Rey',
        precio: 137799,
        imagen: '../assets/uv.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '19',
        titulo: "The Eminem Show (Inan's Version) (Standar Vinyl)",
        artista: 'EMINEM',
        precio: 61601,
        imagen: '../assets/en.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '20',
        titulo: "Si ayer fuera hoy (Inan's Version) (Standar Vinyl)",
        artista: 'Morat',
        precio: 46989,
        imagen: '../assets/morat.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '21',
        titulo: "Oktubre (Nacho's Version) (Standar Vinyl)",
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        precio: 65500,
        imagen: '../assets/r.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '22',
        titulo: "Artaud (Nachito's Version) (Standar Vinyl)",
        artista: 'Pescado Rabioso',
        precio: 41372,
        imagen: '../assets/ar.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '23',
        titulo: "GNX (Agu's Version) (Exclusive White Vinyl)",
        artista: 'Kendrick Lamar',
        precio: 49500,
        imagen: '../assets/k.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    },
    {
        id: '24',
        titulo: "Crisis (Agu's Version) (CD Estandar)",
        artista: 'Las Pastillas del Abuelo',
        precio: 23299,
        imagen: '../assets/lpda.webp',
        descripcion_larga: 'Añade aquí la descripción larga para este producto.'
    }
];