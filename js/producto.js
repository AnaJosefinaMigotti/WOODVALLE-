// info de las discas

const BBDD_PRODUCTOS = [
    {
        id: '1',
        titulo: 'The Life of a Showgirl (So Glamorous Cabaret Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosga.webp',
        descripcion_larga: 'The Life of a Showgirl (So Glamorous Cabaret Version)" es una edición especial del álbum de Taylor Swift, que incluye una carátula y dos pistas adicionales, "Elizabeth Taylor (So Glamorous Cabaret Version)" y "Elizabeth Taylor (Original Songwriting Voice Memo).'
    },
    {
        id: '2',
        titulo: 'The Life of a Showgirl (Dressing Room Rehearsal Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosgr.webp',
        descripcion_larga: 'The Life of a Showgirl (Dressing Room Rehearsal Version)" es una edición de lujo del álbum de Taylor Swift que incluye la versión acústica de la canción "The Life of a Showgirl" y otras pistas adicionales, como demos de composiciones originales y versiones acústicas.'
    },
    {
        id: '3',
        titulo: 'The Life of a Showgirl (Alone in my Tower Acoustic Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosgro.webp',
        descripcion_larga: 'The Life of a Showgirl (Alone in my Tower Acoustic Version)" es una versión acústica del artista Taylor Swift que se caracteriza por su intimidad y narración cruda. Esta edición especial, publicada en CD, incluye grabaciones acústicas de canciones como esta, que se presentan de forma despojada, resaltando la composición original de la artista y explorando una atmósfera más tranquila.'
    },
    {
        id: '4',
        titulo: 'The Life of a Showgirl (Life is a Song - Acoustic Version) (CD Importado)',
        artista: 'Taylor Swift',
        precio: 37030,
        imagen: '../assets/tlosgv.webp',
        descripcion_larga: 'The Life of a Showgirl (Life Is a Song – Acoustic Version)” es una versión acústica de la canción The Life of a Showgirl, que resalta un costado más íntimo y emocional del tema original.'
    },
    {
        id: '5',
        titulo: "UN LOCO BOHEMIO DE LA NOCHE (CD 1) (Torito's Version)",
        artista: 'La Mona Jimenez',
        precio: 29900,
        imagen: '../assets/mn.webp',
        descripcion_larga: '"Un Loco Bohemio de la Noche" es un álbum de estudio de La Mona Jiménez, lanzado en 2011. Esta edición presenta una selección de temas inéditos junto a canciones elegidas por el público, destacando el espíritu festivo y romántico del cuarteto cordobés. Incluye canciones emblemáticas como “Taxi Taxi”, “Mary Juana” y “El Bohemio”, que reflejan la vida nocturna, la pasión y la esencia popular del artista.'
    },
    {
        id: '6',
        titulo: "ERA (Eri's version) (Vinyl Couleur)",
        artista: 'ERA',
        precio: 56117,
        imagen: '../assets/era.webp',
        descripcion_larga: '"Era" es un álbum debut del proyecto musical ERA, creado por el compositor francés Eric Lévi y lanzado en 1996. Esta producción combina elementos de música gregoriana, rock y electrónica, creando una atmósfera mística y cinematográfica. Con temas icónicos como “Ameno” y “Divano”, el disco se destaca por su fusión de coros en latín ficticio y arreglos orquestales modernos. La estética de "Era" evoca lo espiritual y lo épico, consolidándolo como una de las obras más representativas del crossover entre lo clásico y lo contemporáneo.'
    },
    {
        id: '7',
        titulo: "Highway to Hell (Torito's Version) (Vinyl 50th - Orange)",
        artista: 'AC/DC',
        precio: 136999,
        imagen: '../assets/acdc.webp',
        descripcion_larga: '"Highway to Hell" es el sexto álbum de estudio de AC/DC, lanzado en 1979. Es uno de los discos más emblemáticos del hard rock y el último grabado con el vocalista Bon Scott antes de su fallecimiento. Producido por Robert John “Mutt” Lange, marcó un salto en la calidad de sonido y consolidó el estilo potente y directo de la banda. Incluye clásicos como “Highway to Hell”, “Girls Got Rhythm” y “Touch Too Much”, himnos del rock que definieron una era y llevaron a AC/DC al reconocimiento internacional.'
    },
    {
        id: '8',
        titulo: "Gracias a Dios (Eri's version) (CD)",
        artista: 'La Mona Jiménez',
        precio: 19771,
        imagen: '../assets/gd.jpg',
        descripcion_larga: '"Gracias a Dios" es un álbum de estudio de La Mona Jiménez, lanzado en 2004. Este trabajo refleja una etapa de gratitud y madurez artística del ícono del cuarteto cordobés. Con su característico ritmo bailable y letras cargadas de emoción, el disco combina temas festivos con otros de tono más reflexivo. Incluye canciones destacadas como “Gracias a Dios”, “El Federal” y “Beso a beso”, que celebran la vida, el amor y la conexión con su público. Es una obra que reafirma la esencia popular y el legado musical de La Mona.'
    },
    {
        id: '9',
        titulo: "Speak Now (Taylor's Version) (Florcita's Version) (Three-LP set)",
        artista: 'Taylor Swift',
        precio: 185398,
        imagen: '../assets/sntl.webp',
        descripcion_larga: '"Speak Now (Taylor’s Version) (Three-LP)" es la reedición del tercer álbum de estudio de Taylor Swift, lanzada en 2023 como parte de su proyecto de regrabaciones. Esta versión en vinilo triple incluye nuevas mezclas y remasterizaciones de los temas originales, junto con seis canciones inéditas “From the Vault”, entre ellas “I Can See You” y “Castles Crumbling” (junto a Hayley Williams). Con un sonido más maduro y producción cuidada, Taylor’s Version recupera el control artístico de Swift y celebra la narrativa personal, la introspección y el poder emocional que definieron Speak Now.'
    },
    {
        id: '10',
        titulo: "Speak Now (Taylor's Version) (Florcita's Version) (CD Standar)",
        artista: 'Taylor Swift',
        precio: 22079,
        imagen: '../assets/spcd.webp',
        descripcion_larga: '"Speak Now (Taylor’s Version) (CD Standard)" es la edición en formato físico del tercer álbum regrabado de Taylor Swift, lanzado en 2023. Esta versión incluye 22 canciones, entre ellas los éxitos originales como “Enchanted” y “Back to December”, junto con seis temas inéditos “From the Vault”, como “I Can See You” y “Electric Touch” (feat. Fall Out Boy). Con producción de Taylor Swift y Aaron Dessner, el álbum mantiene la esencia romántica y confesional de la era original, pero con una interpretación vocal más madura y una producción renovada que celebra su evolución artística.'
    },
    {
        id: '11',
        titulo: "Midnights: Jade Green Edition Vinyl (Wanda's Version)",
        artista: 'Taylor Swift',
        precio: 109500,
        imagen: '../assets/mj.webp',
        descripcion_larga: '"Midnights: Jade Green Edition Vinyl" es una edición especial en vinilo del álbum "Midnights" de Taylor Swift, lanzado en 2022. Esta versión forma parte de una colección de cuatro variantes de color, cada una con una estética única inspirada en el concepto nocturno del disco. El vinilo presenta un elegante tono verde jade y una carátula exclusiva, manteniendo las 13 canciones originales, entre ellas “Anti-Hero”, “Lavender Haze” y “Bejeweled”. Combina pop introspectivo, synth-pop y toques electrónicos, explorando los pensamientos, inseguridades y sueños que surgen a medianoche.'
    },
    {
        id: '12',
        titulo: "Midnights: Lavender Edition Vinyl (Wanda's Version)",
        artista: 'Taylor Swift',
        precio: 109500,
        imagen: '../assets/ml.webp',
        descripcion_larga: '"Midnights: Lavender Edition Vinyl" es una edición especial en vinilo del álbum "Midnights" de Taylor Swift, lanzado en 2022. Forma parte de la colección de variantes de color inspiradas en los tonos de la noche y los estados emocionales que atraviesa el disco. Esta versión incluye un vinilo de color lavanda y una carátula exclusiva, junto con las 13 canciones originales, entre ellas “Anti-Hero”, “Maroon” y “Karma”. Con un sonido pop elegante y melancólico, "Midnights" explora la autoconfianza, la introspección y las emociones que despiertan en la oscuridad.'
    },
    {
        id: '13',
        titulo: "Under My Skin (Dylan's Edition) (Vinyl Standard)",
        artista: 'Avril Lavigne',
        precio: 57900,
        imagen: '../assets/AL6.webp',
        descripcion_larga: '"Under My Skin" es el segundo álbum de estudio de Avril Lavigne, lanzado en 2004. Esta producción continúa con el estilo pop punk y rock alternativo que la caracterizó en su debut, pero con un sonido más oscuro y maduro. Incluye éxitos como “My Happy Ending”, “Nobody’s Home” y “Don’t Tell Me”, con letras que exploran el amor, la rebeldía y la vulnerabilidad personal. Producido por Butch Walker y Clif Magness, el disco consolidó a Avril como una de las voces jóvenes más influyentes del pop rock de la década de 2000.'
    },
    {
        id: '14',
        titulo: "Brand New Eyes (Dylan's Version) (Vinyl Standard)",
        artista: 'Paramore',
        precio: 79900,
        imagen: '../assets/pr.webp',
        descripcion_larga: '"Brand New Eyes" es el tercer álbum de estudio de Paramore, lanzado en 2009. Este disco combina pop punk, rock alternativo y emo, mostrando un sonido más maduro y cohesivo respecto a sus trabajos anteriores. Incluye éxitos como “Ignorance”, “The Only Exception” y “Brick by Boring Brick”, con letras que exploran relaciones personales, conflictos internos y crecimiento emocional. Producido por Rob Cavallo, Brand New Eyes consolidó a Paramore como una de las bandas más destacadas del rock juvenil de finales de los 2000.'
    },
    {
        id: '15',
        titulo: "Short n' Sweet (Indi's Version) (Standard LP)",
        artista: 'Sabrina Carpenter',
        precio: 84991,
        imagen: '../assets/sns.webp',
        descripcion_larga: '"Short n Sweet" es el sexto álbum de estudio de la cantante estadounidense Sabrina Carpenter, lanzado el 23 de agosto de 2024 por Island Records. Este proyecto marca una evolución significativa en su carrera, consolidándose como su segundo álbum con total control creativo tras Emails I Cant Send (2022).'
    },
    {
        id: '16',
        titulo: "Rodeo (Expanded Edition) (Federico's Version) (CD)",
        artista: 'Travis Scott',
        precio: 44991,
        imagen: '../assets/tsr.webp',
        descripcion_larga: '"Rodeo" es el álbum debut de estudio de Travis Scott, lanzado en 2015. Incluye colaboraciones con The Weeknd, Kanye West, Future y Justin Bieber, y combina trap con elementos psicodélicos. Contiene éxitos como “Antidote”, “3500” y “Maria I’m Drunk”, consolidando a Travis como una figura clave del hip-hop moderno.'
    },
    {
        id: '17',
        titulo: "Sigh No More: Limited Clear Vinyl LP (Cabe's Version)",
        artista: 'Mumford and Sons',
        precio: 89991,
        imagen: '../assets/mas.webp',
        descripcion_larga: '"Sigh No More: Limited Clear Vinyl LP" es una edición especial del álbum debut de Mumford & Sons, lanzada el 19 de octubre de 2024 para el National Album Day. Esta versión limitada presenta el disco en vinilo transparente, destacando su estética minimalista y elegante. Incluye los éxitos “Little Lion Man”, “The Cave” y “Roll Away Your Stone”, que fusionan folk y rock con letras emotivas.'
    },
    {
        id: '18',
        titulo: "Ultraviolence (Double Vinyl) (Standard) (Aixa's Version)",
        artista: 'Lana del Rey',
        precio: 137799,
        imagen: '../assets/uv.webp',
        descripcion_larga: '"Ultraviolence (Standard Double Vinyl)" es la edición estándar en vinilo doble del tercer álbum de estudio de Lana Del Rey, lanzado en 2014. Esta versión presenta el álbum en dos discos de vinilo negro de 180 gramos, con una duración total de 51 minutos y 24 segundos. Incluye los sencillos “West Coast”, “Shades of Cool” y “Brooklyn Baby”, y es reconocida por su portada en blanco y negro que muestra a Lana Del Rey junto a un coche.'
    },
    {
        id: '19',
        titulo: "The Eminem Show (Inan's Version) (Standar Vinyl)",
        artista: 'EMINEM',
        precio: 61601,
        imagen: '../assets/en.webp',
        descripcion_larga: '"The Eminem Show" es el cuarto álbum de estudio de Eminem, lanzado en 2002. Incluye éxitos como “Without Me”, “Cleanin’ Out My Closet” y “Sing for the Moment”, combinando rap agresivo con introspección personal y crítica social. Producido en gran parte por Dr. Dre, el disco consolidó a Eminem como una de las voces más influyentes del hip-hop de principios de los 2000.'
    },
    {
        id: '20',
        titulo: "Si ayer fuera hoy (Inan's Version) (Standar Vinyl)",
        artista: 'Morat',
        precio: 46989,
        imagen: '../assets/morat.webp',
        descripcion_larga: '"Si Ayer Fuera Hoy" es un álbum de estudio de Morat, lanzado en 2022. Incluye canciones destacadas como “No Termino”, “Ya No Tiene Novio” y “Cuando Nadie Ve”, con el estilo característico de pop latino y folk pop de la banda. El disco combina letras sobre amor, desamor y reflexiones personales con melodías pegajosas, reafirmando la identidad musical de Morat en la escena latina.'
    },
    {
        id: '21',
        titulo: "Oktubre (Nacho's Version) (Standar Vinyl)",
        artista: 'Patricio Rey y sus Redonditos de Ricota',
        precio: 65500,
        imagen: '../assets/r.webp',
        descripcion_larga: '"Oktubre" es el segundo álbum de estudio de Patricio Rey y sus Redonditos de Ricota, lanzado en 1986. Con un estilo que combina rock, post-punk y letras cargadas de crítica social y política, incluye temas emblemáticos como “Jijiji”, “Fuegos de Octubre” y “Preso en mi Ciudad”. Este disco consolidó a la banda como un referente del rock argentino independiente y marcó un antes y un después en su carrera.'
    },
    {
        id: '22',
        titulo: "Artaud (Nachito's Version) (Standar Vinyl)",
        artista: 'Pescado Rabioso',
        precio: 41372,
        imagen: '../assets/ar.webp',
        descripcion_larga: '"Artaud" es un álbum de estudio de Luis Alberto Spinetta, lanzado en 1973. Considerado un hito del rock argentino, combina rock progresivo y psicodélico con letras poéticas y profundas. Incluye temas emblemáticos como “Cantata de puentes amarillos” y “Todas las hojas son del viento”, consolidando a Spinetta como un referente de la música nacional.'
    },
    {
        id: '23',
        titulo: "GNX (Agu's Version) (Exclusive White Vinyl)",
        artista: 'Kendrick Lamar',
        precio: 49500,
        imagen: '../assets/k.webp',
        descripcion_larga: '"GNX" es un proyecto de Kendrick Lamar, lanzado en [no se encontró fecha exacta; necesitaría confirmación]. Mezcla rap, jazz y soul con letras introspectivas y sociales. Destacan pistas que muestran la habilidad lírica y la narrativa personal que caracteriza a Kendrick.'
    },
    {
        id: '24',
        titulo: "Crisis (Agu's Version) (CD Estandar)",
        artista: 'Las Pastillas del Abuelo',
        precio: 23299,
        imagen: '../assets/lpda.webp',
        descripcion_larga: '"Crisis" es el tercer álbum de estudio de Las Pastillas del Abuelo, lanzado el 29 de agosto de 2008. Este disco se caracteriza por su estilo de rock alternativo y letras profundas, abordando temas existenciales y filosóficos. La mayoría de las canciones están tituladas como preguntas, como “¿De dónde vengo?”, “¿Qué es Dios?” y “¿Me juego el corazón?”.'
    }
];