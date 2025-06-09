const productos = [
    { id: 1, nombre: "Pan Francés", precio: 0.5, imagen: "/assets/pan-frances.jpg" },
    { id: 2, nombre: "Croissant", precio: 1.5, imagen: "/assets/croissant.jpg" },
    { id: 3, nombre: "Torta Selva Negra", precio: 15, imagen: "/assets/selva-negra.jpg" },
  ];
  
  export const obtenerProductos = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(productos), 500); // simulación de API
    });
  };
  