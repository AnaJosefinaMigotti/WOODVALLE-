
const URL_JSON = '../data/producto.json'; 
const LIMITE_HOME = 3;

// exportar función para obtener datos
export async function fetchProductos() {
    try {
        const response = await fetch(URL_JSON);
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        return await response.json(); 
    } catch (error) {
        console.error("Fallo al obtener los productos:", error);
        throw error; 
    }
}

export function filtrarParaHome(productos) {
    const productosPorCategoria = productos.reduce((acc, producto) => {
        const categoria = producto.categoria || 'Varios';
        if (!acc[categoria]) acc[categoria] = [];
        acc[categoria].push(producto);
        return acc;
    }, {});

    const productosHome = [];

    for (const categoria in productosPorCategoria) {
        productosHome.push(...productosPorCategoria[categoria].slice(0, LIMITE_HOME));
    }
    return productosHome;
}