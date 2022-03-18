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


const producto1 = new Producto('PIZZA FRIZZIO', 3, 320, 0.90, './media/img/muza-y-cebolla.png', 'frizzio, all');
const producto2 = new Producto('TENTACION CADBURY', 1, 180, 0.90, './media/img/tentacion-cadbury.jpg','tentacion, all');
const producto3 = new Producto('EMPANADAS FRIZZIO', 5, 250, 0.95, './media/img/empanadas-grido.png', 'frizzio, all');
const producto4 = new Producto('BOMBON ESCOCÉS', 12, 150, 0.80, './media/img/bombon-escoces.jpg', 'bombones, all');
const producto5 = new Producto('PALITO HELADO FRUTILLA', 12, 150, 0.80, './media/img/palitofrutal-frutilla.jpg', 'palito, all');


//-----NO ENCONTRÉ LA FORMA DE HACER LA CARGA A MI ARRAY DESPUES DE CREAR LOS OBJETOS

const productos = [producto1, producto2, producto3, producto4, producto5];


let listadoProductos='';
let numeroProducto=0;
let seguirComprando=1;
let totalAPagar = 0;
let totalAPagarEfectivo = 0;
let filtroValor = "";
let carritoSwitch = 0;
let carrito = [];
const divisa = "$"




let newCard = document.createElement('div');
let cards__container = document.querySelector('.cards__container');

const filtroProductos = [];

function mostrarDefalut(){
for (let i = 0; i < productos.length; i++){
    filtroProductos.push(productos[i])
}
}

function limpiarFiltro(){
    for(let i = 0; i < filtroProductos.length; i++){
    filtroProductos.splice(i);
    console.log("limpiando: "+i)
    }
    let list = document.querySelector('.cards__container');
    list.innerHTML = "";
}

function mostrarProductos(){
    cards__container.innerHTML= "";
    for (const producto of filtroProductos){
        let contenedor = document.createElement("div");
        contenedor.className = "card__item";
        contenedor.innerHTML = `<div class="card__img">
                                <img src="${producto.imagen}" alt="" class="card__bg">
                                </div>
                                <div class="card__titulo">
                                    ${producto.name}
                                </div>
                                <div class="card__descrip">
                                    ${"$"+producto.price}
                                </div>
                                <div class="card__button" id="${producto.name}">
                                    <button class="card__buy">
                                        Agregar al Carrito
                                    </button>
                                </div>`

        cards__container.appendChild(contenedor);
        let miBoton = document.getElementById(producto.name);
        miBoton.addEventListener("click", function(){sumarACarrito(producto)});
    }
    }



function filtroBotonera(filtroValor){
    console.log("Filtrame las: " +filtroValor)
    limpiarFiltro();
    const productosFiltrados = productos.filter(x => x.categoria.includes(filtroValor));
    
    for(let i=0; i < productos.length; i++){
        filtroProductos.splice(i);
    }
    for(let i=0; i < productosFiltrados.length; i++){
        filtroProductos.push(productosFiltrados[i]);
    }
    console.log(filtroProductos);
    mostrarProductos();
}



//-----CARGA INICIAL CON TODOS LOS PRODUCTOS-----
mostrarDefalut();
mostrarProductos(); 
obteniendoLocalStorage();

function obteniendoLocalStorage(){
    let miCarrito = localStorage.getItem("miCarrito");
    if (miCarrito==undefined){
    
    }else{
        carrito = JSON.parse(miCarrito);
        let contadorCarrito = document.getElementById("counterCarrito");
    contadorCarrito.innerText = carrito.length;
    }
}



//-----BOTONES DE FILTRADO-----

//-----BOTON FILTRO FRIZZIO----
let boton1 = document.getElementById("btn1");
boton1.addEventListener("click", function(){filtroBotonera("frizzio")});

//-----BOTON FILTRO TENTACIÓN----
let boton2 = document.getElementById("btn2");
boton2.addEventListener("click", function(){filtroBotonera("tentacion")});

//-----BOTON FILTRO BOMBONES----
let boton3 = document.getElementById("btn3");
boton3.addEventListener("click", function(){filtroBotonera("bombones")});

//-----BOTON FILTRO BOMBONES----
let boton4 = document.getElementById("btn4");
boton4.addEventListener("click", function(){filtroBotonera("palito")});

//-----BOTON FILTRO "TODOS"-----
let boton5 = document.getElementById("btn5");
boton5.addEventListener("click", function(){filtroBotonera("all")});



//------Guardar en LocalStorage-----
function guardadoJson(){
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("miCarrito", carritoJson);
}





function sumarACarrito(producto){
    carrito.push(producto);
    console.log("insertando: "+producto.name)
    console.log(carrito);
    guardadoJson();
    let contadorCarrito = document.getElementById("counterCarrito");
    contadorCarrito.innerText = carrito.length;
}

let botonCarrito = document.getElementById("carrito");
botonCarrito.addEventListener("click", mostrarCarrito);

function mostrarCarrito(){
    cards__container.innerHTML= "";
    if(carritoSwitch==0){
        carritoSwitch=1;
    for(producto of carrito){
        let contenedorCarrito = document.createElement("div");
        contenedorCarrito.className = "card__item";
        contenedorCarrito.innerHTML = `<div class="card__img">
                                <img src="${producto.imagen}" alt="" class="card__bg">
                                </div>
                                <div class="card__titulo">
                                    ${producto.name}
                                </div>
                                <div class="card__descrip">
                                    ${"$"+producto.price}
                                </div>
                                <div class="card__button" id="${producto.name}">
                                    <button class="card__buy">
                                        Quitar del carrito
                                    </button>
                                </div>
                                <div>CARRITO</div>`
        cards__container.appendChild(contenedorCarrito);
        let miBotonQuitar = document.getElementById(producto.name);
        miBotonQuitar.addEventListener("click", function(){quitarDelCarrito(producto)});
        }
        
        
    } else{
        mostrarProductos();
        carritoSwitch=0;
    }
}

function quitarDelCarrito(producto){
    console.log(producto);
    carritoIndice = carrito.indexOf(producto);
    if (carritoIndice > -1) {
        carrito.splice(carritoIndice, 1);
     }
    carritoSwitch=0;
    mostrarCarrito();
    let contadorCarrito = document.getElementById("counterCarrito");
    contadorCarrito.innerText = carrito.length;
}



//-----BOTONES "AGREGAR AL CARRITO"-----

//-----ESTOY INTENTANDO PENSAR LA LOGICA PARA NO TENER QUE AGREGARLOS UNO POR UNO CON LOS ID's


// let agregarCarrito = document.getElementById("PIZZA FRIZZIO");
// agregarCarrito.addEventListener("click", sumarACarrito);

// let agregarCarrito2 = document.getElementById("TENTACION CADBURY");
// agregarCarrito2.addEventListener("click", sumarACarrito);

// let agregarCarrito3 = document.getElementById("EMPANADAS FRIZZIO");
// agregarCarrito3.addEventListener("click", sumarACarrito);

// let agregarCarrito4 = document.getElementById("BOMBON ESCOCÉS");
// agregarCarrito4.addEventListener("click", sumarACarrito);

// let agregarCarrito5 = document.getElementById("PALITO HELADO FRUTILLA");
// agregarCarrito5.addEventListener("click", sumarACarrito);


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







