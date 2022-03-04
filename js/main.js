function Producto(nombre, stock, precio, promo, imagen, categoria){
    this.name = nombre;
    this.stock = stock;
    this.price = precio;
    this.promo = promo;
    this.imagen = imagen;
    this.categoria = categoria;

    this.sell = function(quantity) {
        console.log('El stock actual es de: '+this.stock)
        if(this.stock>=quantity && this.stock>0){
            this.stock-=quantity;
            carrito += '\n- '+quantity+' '+this.name;
            totalAPagar += this.price*quantity;
            totalAPagarEfectivo += this.price*quantity*this.promo;
        } else if(this.stock>0){
            quantity = prompt('No tenemos esa cantidad, quedan solamente '+this.stock+' '+this.name+' disponibles.\nCuantos quieres llevar?')
            if (quantity<this.stock){
                this.stock-=quantity;
                carrito += '\n- '+quantity+' '+this.name;
                totalAPagar += this.price*quantity;
                totalAPagarEfectivo += this.price*quantity*this.promo;
                } else {
                    alert('No tenemos la cantidad que quieres comprar, pero pueds elegir entre nuestros demas productos!')
                }
        } else {
            alert('Nos quedamos sin stock de '+this.name+'\nTe gustaría llevar otra cosa?')
        }
    }
}

const producto1 = new Producto('Pizza Frizzio', 3, 320, 0.90, './media/img/muza-y-cebolla.png"', 'frizzio');
const producto2 = new Producto('Tentación', 1, 180, 0.90, './media/img/tentacion-cadbury.jpg','helado');
const producto3 = new Producto('Empanadas Frizzio', 5, 250, 0.95, './media/img/empanadas-grido.png', 'frizzio')
const producto4 = new Producto('Bombon Escoces', 12, 150, 0.80, './media/img/bombon-escoces.jpg', 'bombones')

const productos = [producto1, producto2, producto3, producto4];
let listadoProductos='';
let numeroProducto=0;
let seguirComprando=1;
let carrito = '';
let totalAPagar = 0;
let totalAPagarEfectivo = 0;


let newCard = document.createElement('div');
let cards__container = document.querySelector('.cards__container');

for (const producto of productos){
    let contenedor = document.createElement("div");
    contenedor.className = "card__item";

    contenedor.innerHTML = `<div class="card__img">
                            <img src="${producto.imagen}" alt="" class="card__bg">
                            </div>
                            <div class="card__titulo">
                                ${producto.name}
                            </div>
                            <div class="card__descrip">
                                
                            </div>
                            <div class="card__button">
                                <button class="card__buy">
                                    Agregar al Carrito
                                </button>
                            </div>`

    cards__container.appendChild(contenedor);
}

// function viewsArrayInput(){
//     let arrayInput = new Array();
//     let inputValues = document.getElementsByClassName("buscador__filtro"),
//     namesValues = [].map.call(inputValues,function(dataInput){
//         arrayInput.push(dataInput.value);
//     });
//     arrayInput.forEach(function(inputsValuesData){
//         switch(arrayInput.toString()){
//             case(producto1.name):
//             console.log(producto1);
//             break;
//             case(!producto1.name)
//             console.log("Producto invalido!")
//         }

//     });
//  }


//crear el listado de prodcutos disponibles
// for(names in productos){
//     let indice = parseInt(names) + 1;
//     listadoProductos += indice+'- '+productos[names].name+'\n';
// }

// do{
// productoCompra = parseInt(prompt('Bienvenido a Grido!\nQue te gustaría comprar?\n'+listadoProductos))

// switch(productoCompra){
//     case(1):
//     cantidadProducto = parseInt(prompt('El precio de las Pizzas Frizzio es de: $'+producto1.price+'\nCuantas vas a llevar?'));
//     producto1.sell(cantidadProducto)

//     break;
//     case(2):
//     cantidadProducto = parseInt(prompt('El precio del Helado Tentación es de: $'+producto2.price+'\nCuantos vas a llevar?'));
//     producto2.sell(cantidadProducto)

//     break;
//     case(3):
//     cantidadProducto = parseInt(prompt('El precio de las Hamburguesas Frizzio es de: $'+producto3.price+'\nCuantas vas a llevar?'));
//     producto3.sell(cantidadProducto)

//     break;
//     case(4):
//     cantidadProducto = parseInt(prompt('El precio del Bomboón Escocés es de: $'+producto4.price+'\nCuantos vas a llevar?'));
//     producto4.sell(cantidadProducto)

//     break;

    
// }
//     stillBuying = parseInt(prompt('Quisiera agregar comprar algo más\n1- SI\n2- NO'));
//     if(stillBuying==1){
//         seguirComprando=1;
//     }else if(stillBuying==2){
//         seguirComprando=0;
//     }

// } while(seguirComprando==1)

// parseInt(prompt('Tu lista de compras es: '+carrito+'\nEl total a pagar es de: $'+totalAPagar+'\nSi abona en efectivo el total sería de: $'+totalAPagarEfectivo))

// let precioCono = 0;
// let listadoBochas ="\n";
// let terminarCompra=0;
// let cantidadBochas=0;
// let saborBocha;
// let seguirComprando=1;
// let precioTotal = 0;
// let precioTotal = 0;

// function venta1(producto, stock){
//     if(stock<=0){
//         alert('Nos quedamos sin stock de sabor '+producto+', te gustaría elegir otro?');
//         i-=1;
//     }else{
//         listadoBochas = listadoBochas+'- '+producto+'\n';
//         stock-=1;
//     }
// }

// function venta2(producto, stock){
//     if(stock<=0){
//         alert('Nos quedamos sin potes de '+producto+', te gustaría elegir otro producto?');
//     }else{
//         stock-=1;
//         console.log(stock);
//     }

// } 

// function cantSabores(cantidad, precio){
//     if(cantidad>0){
//         precioTotal+=precio;
//         console.log(precioTotal);
//         for(let i = 0; i < cantidad; i++){
//                 sabor = prompt("Tenemoos los siguientes sabores disponibles"+"\n- "+heladoA+"\n- "+heladoB+"\n- "+heladoC+"\n- "+heladoD+"\n- "+heladoE+"\nIngrese el sabor n°: "+(i+1));
//                 sabor = sabor.toLowerCase();
//                 switch(sabor){
//                     case "chocolate":
//                         venta1(heladoA, heladoAStock);
//                         break;
//                     case "vainilla":
//                         venta1(heladoB, heladoBStock);
//                         break;
//                     case "dulce de leche":
//                         venta1(heladoC, heladoCStock);
//                         break;
//                     case "tramontana":
//                         venta1(heladoD, heladoDStock);
//                         break;
//                     case "frutilla":
//                         venta1(heladoE, heladoEStock);
//                         break;
//                 }
//         }
//     } 



// function cantBochas(cantidad, precio){
//     if (cantidad>0){
//         precioTotal+=cantidad*precio;
//         console.log(precioTotal);
//             for(let i = 0; i < cantidad; i++){
//                 saborBocha = prompt("Tenemoos los siguientes sabores disponibles"+"\n- "+heladoA+"\n- "+heladoB+"\n- "+heladoC+"\n- "+heladoD+"\n- "+heladoE+"\nIngrese el sabor de la bocha n°: "+(i+1));
//                 saborBocha = saborBocha.toLowerCase();
//                 switch(saborBocha){
//                     case "chocolate":
//                         venta1(heladoA, heladoAStock);
//                         break;
//                     case "vainilla":
//                         venta1(heladoB, heladoBStock);
//                         break;
//                     case "dulce de leche":
//                         venta1(heladoC, heladoCStock);
//                         break;
//                     case "tramontana":
//                         venta1(heladoD, heladoDStock);
//                         break;
//                     case "frutilla":
//                         venta1(heladoE, heladoEStock);
//                         break;
//                 }
//             }
//     }
// }



// do{
//     producto = parseInt(prompt('Bienvenido a Grido helados\nQue le gustaría pedir hoy?\n1- Cucurucho\n2- 1 Kg.\n3- 1/2 Kg.'));
    
//     switch(producto){
//     case(1):
//     listadoBochas="\n";
//     cantidadBochas = parseInt(prompt("De cuantas bochas va a querer su helado?"));
//     cantBochas(cantidadBochas, producto1Precio);
//     alert("Los sabores elegidos son:"+listadoBochas+'y el total es de: $'+precioTotal);
//     break;
//     case(2):
//     listadoBochas="\n";
//     cantidadSabores = parseInt(prompt("De cuantos sabores va a querer su helado?\n(Máximo 4 Sabores)"));
//     cantSabores(cantidadSabores, producto2Precio);
//     alert('Los sabores elegidos son: '+listadoBochas+'\nEl precio total sería de: $'+precioTotal);
//     break;
//     case(3):
//     listadoBochas="\n";
//     cantidadSabores = parseInt(prompt("De cuantos sabores va a querer su helado?\n(Máximo 3 Sabores)"));
//     cantSabores(cantidadSabores, producto3Precio);
//     alert('Los sabores elegidos son: '+listadoBochas+'\nEl precio total sería de: $'+precioTotal);
//     break;
// }

//     stillBuying = parseInt(prompt('Quisiera agregar comprar algo más\n1- SI\n2- NO'));
//     if(stillBuying==1){
//         seguirComprando=1;
//     }else if(stillBuying==2){
//         seguirComprando=0;
// }
    
// } while(seguirComprando==1)

// alert('Gracias por su compra!\nEl monto total a pagar es de: $'+precioTotal+'.')







