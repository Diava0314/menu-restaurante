let menu: number;
let plato: number;
let cantidadPlato: number;

console.log('Seleccione un algún menú del 1 a 3');
menu = Number(prompt());

switch (menu) {
  case 1:
    console.log('Tu menú es vegetariano y te ofrecemos: sopas de vegetales(1), ensalada y jugo(2)');
    plato = Number(prompt('Seleccione un plato del menú:'));
    console.log('Diga cuántos platos desea del menú');
    cantidadPlato = Number(prompt());
    console.log('El total que debes pagar con el IVA y con el descuento del 20% es: ');

    switch (plato) {
      case 1:
        console.log((cantidadPlato * 100000) * 0.19);
        break;
        case 2:
          console.log((cantidadPlato * 100000) * 0.19);
        break;
      default:
        console.log("opcion invalidad");

    }
    break;

  case 2:
    console.log('Tu menú no es vegetariano y te ofrecemos bandejas de: carne(1), pollo(2), cerdo(3)');
    plato = Number(prompt('Seleccione un plato del menú:'));
    console.log('Diga cuántos platos desea del menú');
    cantidadPlato = Number(prompt());
    console.log('El total que debes pagar con el IVA y con el descuento del 10% es: ');

    switch (plato) {
      case 1:
        console.log((cantidadPlato * 100000) * 0.10);
        break;
      case 2:
        console.log((cantidadPlato * 100000) * 0.10);
        break;
      case 3:
        console.log((cantidadPlato * 100000) * 0.10);
        break;
      default:
        console.log("opcion invalidad");
    }
    break;

  case 3:
    console.log('Tu menú es comidas rápidas y está compuesto de: perros calientes(1), hamburguesas(2)');
    plato = Number(prompt('Seleccione un plato del menú:'));
    console.log('Diga cuántos platos desea del menú');
    cantidadPlato = Number(prompt());
    console.log('El total que debes pagar con el IVA y con el descuento del 5% es: ');

    switch (plato) {
      case 1:
        console.log((cantidadPlato * 100000) * 0.05);
        break;
      case 2:
        console.log((cantidadPlato * 100000) * 0.05);
        break;
      default:
        console.log("opcion invalidad");
    }
    break;

  default:
    console.log('No tenemos ese menú');
    break;
}
