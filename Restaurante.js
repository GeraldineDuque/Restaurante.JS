import Producto from './Producto.js';
import Pedido from './Pedido.js';

class Restaurante {
  constructor() {
    this.pedidos = [];
    this.productos = {
      entrada: [],
      platoPrincipal: [],
      postre: []
    };
  }

  // Agregar un producto al menú del restaurante
  agregarProducto(producto) {
    this.productos[producto.tipo].push(producto);
  }

  // Creación de un nuevo pedido para una mesa específica
  crearPedido(numeroMesa) {
    const pedido = new Pedido(numeroMesa);
    this.pedidos.push(pedido);
    return pedido;
  }

  // Lista de todos los pedidos realizados
  listarPedidos() {
    return this.pedidos.map(pedido => ({
      numeroMesa: pedido.numeroMesa,
      detalles: pedido.obtenerDetalles(),
      total: pedido.obtenerTotal()
    }));
  }

  // Calcular los ingresos por tipo de comida y ordenarlos de mayor a menor
  obtenerIngresosPorTipo() {
    const ingresos = {
      entrada: 0,
      platoPrincipal: 0,
      postre: 0
    };

    this.pedidos.forEach(pedido => {
      pedido.items.forEach(item => {
        ingresos[item.tipo] += item.precio;
      });
    });

    return Object.entries(ingresos).sort((a, b) => b[1] - a[1]);
  }

  //cantidad de pedidos por mesa y ordenarlas de mayor a menor
  obtenerPedidosPorMesa() {
    const conteoPedidos = {};

    this.pedidos.forEach(pedido => {
      if (!conteoPedidos[pedido.numeroMesa]) {
        conteoPedidos[pedido.numeroMesa] = 0;
      }
      conteoPedidos[pedido.numeroMesa]++;
    });

    return Object.entries(conteoPedidos).sort((a, b) => b[1] - a[1]);
  }
}

export default Restaurante;
