import Producto from './Producto.js';

class Pedido {
  constructor(numeroMesa) {
    this.numeroMesa = numeroMesa;
    this.items = [];
  }

  // Añadir un producto al pedido
  agregarItem(producto) {
    this.items.push(producto);
  }

  // Calcular el total del pedido
  obtenerTotal() {
    return this.items.reduce((total, producto) => total + producto.precio, 0);
  }

  // Obtener los detalles del pedido
  obtenerDetalles() {
    return this.items.map(item => `${item.nombre} (${item.tipo})`).join(', ');
  }
}

export default Pedido;
