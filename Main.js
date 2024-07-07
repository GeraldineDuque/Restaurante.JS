import Producto from './Producto.js';
import Restaurante from './Restaurante.js';

const restaurante = new Restaurante();

//productos al menú del restaurante 
restaurante.agregarProducto(new Producto('Ensalada', 'entrada', 5.00));
restaurante.agregarProducto(new Producto('Sopa', 'entrada', 4.00));
restaurante.agregarProducto(new Producto('Tostadas', 'entrada', 3.50));
restaurante.agregarProducto(new Producto('Pollo Asado', 'platoPrincipal', 12.00));
restaurante.agregarProducto(new Producto('Pasta', 'platoPrincipal', 10.00));
restaurante.agregarProducto(new Producto('Pescado', 'platoPrincipal', 15.00));
restaurante.agregarProducto(new Producto('Helado', 'postre', 4.50));
restaurante.agregarProducto(new Producto('Pastel', 'postre', 5.00));
restaurante.agregarProducto(new Producto('Fruta', 'postre', 3.50));

//pedidos
const pedido1 = restaurante.crearPedido(1);
pedido1.agregarItem(restaurante.productos['entrada'][0]);
pedido1.agregarItem(restaurante.productos['platoPrincipal'][1]);
pedido1.agregarItem(restaurante.productos['postre'][2]);

const pedido2 = restaurante.crearPedido(2);
pedido2.agregarItem(restaurante.productos['entrada'][1]);
pedido2.agregarItem(restaurante.productos['platoPrincipal'][0]);
pedido2.agregarItem(restaurante.productos['postre'][0]);

const pedido3 = restaurante.crearPedido(1);
pedido3.agregarItem(restaurante.productos['entrada'][2]);
pedido3.agregarItem(restaurante.productos['platoPrincipal'][2]);
pedido3.agregarItem(restaurante.productos['postre'][1]);

//pedidos realizados
console.log('Listado de pedidos realizados:');
restaurante.listarPedidos().forEach(pedido => {
  console.log(`Mesa ${pedido.numeroMesa}: ${pedido.detalles} - Total a pagar: $${pedido.total.toFixed(2)}`);
});

//ingresos por tipo de comida
console.log('\nIngresos por tipo de comida:');
restaurante.obtenerIngresosPorTipo().forEach(([tipo, total]) => {
  console.log(`${tipo}: $${total.toFixed(2)}`);
});

//cantidad de pedidos por mesa
console.log('\nCantidad de pedidos por mesa:');
restaurante.obtenerPedidosPorMesa().forEach(([mesa, cantidad]) => {
  console.log(`Mesa ${mesa}: ${cantidad} pedidos`);
});
