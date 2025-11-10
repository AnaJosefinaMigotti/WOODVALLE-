// Archivo: js/dataService.js

// NOTA: La ruta es relativa a este archivo JS, por lo que sigue siendo la misma.
const URL_JSON = '../data/producto.json'; 
const LIMITE_HOME = 3;

/**
 * Función que realiza el fetch del JSON y retorna el array completo de productos.
 * @returns {Promise<Array>} Una promesa que resuelve con el array de productos.
 */
export async function fetchProductos() {
    try {
        const response = await fetch(URL_JSON);
        
        if (!response.ok) {
            // Lanza un error si la respuesta HTTP no es exitosa
            throw new Error(`Error HTTP! Estado: ${response.status}`);
        }

        // Retorna el array de productos
        return await response.json(); 

    } catch (error) {
        console.error("Error al obtener los productos:", error);
        // Puedes relanzar el error para que el archivo llamador lo maneje
        throw error;
    }
}

/**
 * Función auxiliar para filtrar y limitar los productos para la vista Home.
 * @param {Array} productos - El array completo de productos.
 * @returns {Array} Un array con un máximo de LIMITE_HOME productos por categoría.
 */
export function filtrarParaHome(productos) {
    const productosPorCategoria = productos.reduce((acc, producto) => {
        const categoria = producto.categoria || 'Varios';
        if (!acc[categoria]) {
            acc[categoria] = [];
        }
        acc[categoria].push(producto);
        return acc;
    }, {});

    const productosHome = [];

    for (const categoria in productosPorCategoria) {
        // Tomamos solo el límite
        productosHome.push(...productosPorCategoria[categoria].slice(0, LIMITE_HOME));
    }

    return productosHome;
}