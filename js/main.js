
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


// -----NO ENCONTRÉ LA FORMA DE HACER LA CARGA A MI ARRAY DESPUES DE CREAR LOS OBJETOS

const productosOrigin = [producto1, producto2, producto3, producto4, producto5];
// const productos = [];





let listadoProductos='';
let numeroProducto=0;
let seguirComprando=1;
let totalAPagar = 0;
let totalAPagarEfectivo = 0;
let filtroValor = "";
let carritoSwitch = 0;
let carrito = [];
const divisa = "$"
let carritoIndice = 0;

let productos = [];
let duplicados = [];


let newCard = document.createElement('div');
let cards__container = document.querySelector('.cards__container');




// let productos = [];

function mostrarDefalut(){
for (let i = 0; i < productosOrigin.length; i++){
    productos.push(productosOrigin[i])
}
}

mostrarDefalut();



function limpiarFiltro(){
    for(let i = 0; i < productos.length; i++){
    productos.splice(i);
    console.log("limpiando: "+i)
    }
    let list = document.querySelector('.cards__container');
    list.innerHTML = "";
}

function mostrarProductos(){
    cards__container.innerHTML= "";
    for (const producto of productos){
        let contenedor = document.createElement("div");
        contenedor.className = "card__item";
        contenedor.innerHTML = `<div class="card__img">
                                <img src="${producto.imagen}" alt="" class="card__bg">
                                </div>
                                <div class="card__titulo">${producto.name}</div>
                                <div class="card__descrip">${"$"+producto.price}</div>
                                <div class="card__button" id="${producto.name}">
                                    <button class="card__buy">
                                        Agregar al Carrito
                                    </button>
                                </div>`

        cards__container.appendChild(contenedor);
    
    }
    const agregarButtons = document.querySelectorAll('.card__button');

agregarButtons.forEach(addToCartButton => {
    addToCartButton.addEventListener('click', addToCartClicked);
})
    }



function filtroBotonera(filtroValor){
    limpiarFiltro();
    const productosFiltrados = productosOrigin.filter(x => x.categoria.includes(filtroValor));

    for(let i=0; i < productos.length; i++){
        productos.splice(i);
    }
    for(let i=0; i < productosFiltrados.length; i++){
        productos.push(productosFiltrados[i]);
    }
    console.log(productos);
    mostrarProductos();
}




//------obteniendo LocalStorage-----
function obteniendoLocalStorage(){
    let miCarrito = localStorage.getItem("miCarrito");
    if (miCarrito==undefined){
    
    }else{
        carrito = JSON.parse(miCarrito);
        let contadorCarrito = document.getElementById("counterCarrito");
    contadorCarrito.innerText = carrito.length;
    }
}

//------Guardar en LocalStorage-----
function guardadoJson(){
    let carritoJson = JSON.stringify(carrito);
    localStorage.setItem("miCarrito", carritoJson);
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



let closeCarrito = document.getElementById("closeCarrito");
closeCarrito.addEventListener("click", cerrarCarrito)

function cerrarCarrito(){
    let cerrarSideBar = document.getElementById("sideNav").style.width=0;
}

//-----CARGA INICIAL CON TODOS LOS PRODUCTOS-----
mostrarProductos();
obteniendoLocalStorage();




const carrito__container = document.querySelector('.carritoSideContainer');
 
const comprarButton = document.querySelector('.button__comprar');
comprarButton.addEventListener('click', comprarButtonClicked)

function comprarButtonClicked(){
    carrito__container.innerHTML = ``;
    countCarrito = 0;
    contadorCarritoItem.innerText = countCarrito;
    swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Gracias por su compra...',
        showConfirmButton: false,
        timer: 1800,
})
    cerrarCarrito();
    actualizarTotalCarrito();
    


}

function addToCartClicked(event){
    const button = event.target;
    const item = button.closest('.card__item');

    const itemTitle = item.querySelector('.card__titulo').textContent;
    const itemPrice = item.querySelector('.card__descrip').textContent;
    const itemImage = item.querySelector('.card__bg').src;

    addItemToShoppingCart(itemTitle, itemPrice, itemImage);
}



let contadorCarritoItem = document.getElementById("counterCarrito");
let countCarrito = 0;
function contadorCarritoSuma(){
    countCarrito++;
    contadorCarritoItem.innerText = countCarrito;
}
function contadorCarritoResta(event){
    const cantidadItem = event.target.parentElement.parentElement;
    let cantidadItemValor = cantidadItem.querySelector('.carrito__cantidad').value;
    countCarrito = countCarrito - cantidadItemValor;
    contadorCarritoItem.innerText = countCarrito;
}

function addItemToShoppingCart(itemTitle, itemPrice, itemImage){

    const titulosCarrito = carrito__container.getElementsByClassName('carrito__titulo');

    for(let i = 0; i < titulosCarrito.length; i++){
        if(titulosCarrito[i].innerText === itemTitle){
            let elementCantidad = titulosCarrito[i].parentElement.querySelector('.carrito__cantidad');
            elementCantidad.value++;
            actualizarTotalCarrito();
            contadorCarritoSuma();
            agregarAlert();
            return;
        }
        
    }

    
    agregarAlert();
    let newItemCarrito = document.createElement(`div`);
    newItemCarrito.className = "carrito__item"
    const carritoContent = `<div class="carrito__img">
                                <img src="${itemImage}" alt="" class="carrito__bg">
                            </div>
                            <div class="carrito__titulo">${itemTitle}</div>
                            <input class="carrito__cantidad" type=number value=1></input>
                            <div class="carrito__descrip">${itemPrice}</div>
                            <div class="carrito__button" >
                                <button class="carrito__buy">
                                    Quitar del carrito
                                </button>
                            </div>`
    newItemCarrito.innerHTML = carritoContent;
    carrito__container.append(newItemCarrito);
    contadorCarritoSuma();
    actualizarTotalCarrito();

    newItemCarrito.querySelector('.carrito__button').addEventListener('click', removeCarritoItem);

    newItemCarrito.querySelector('.carrito__cantidad').addEventListener('change', cambioCantidadCarrito)
}


const carritoSvg = document.querySelector('.buscador__carrito')
carritoSvg.addEventListener('click', abrirCarrito)
function abrirCarrito(){
document.getElementById("sideNav").style.width= "20rem";
}

function actualizarTotalCarrito(){
    let total = 0;
    const carritoTotal = document.querySelector('.span__total__precio');

    const itemsCarrito = document.querySelectorAll('.carrito__item');

    itemsCarrito.forEach(itemsCarrito => {
        const carritoItemPrice = Number(itemsCarrito.querySelector('.carrito__descrip').textContent.replace('$',''));

        const carritoItemsCantidad = Number(itemsCarrito.querySelector('.carrito__cantidad').value)
        

        total = total + carritoItemPrice * carritoItemsCantidad;
        
    });

    carritoTotal.innerHTML = `$${total}`;
}

function removeCarritoItem(event){
    const buttonClicked = event.target; 
    buttonClicked.closest('.carrito__item').remove();
    actualizarTotalCarrito();

    swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Eliminando del Carrito...',
            showConfirmButton: false,
            timer: 1500,
    })
    contadorCarritoResta(event);
}

function cambioCantidadCarrito(event){
    const input = event.target;
    actualizarTotalCarrito();
}


function agregarAlert(){
    swal.fire({
        position: 'top',
        icon: 'success',
        title: 'Añadido al Carrito...',
        showConfirmButton: false,
        timer: 1000,
})
}