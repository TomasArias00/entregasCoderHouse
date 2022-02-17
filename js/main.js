const heladoA = "Chocolate";
let heladoAStock = 10;

const heladoB = "Vainilla";
let heladoBStock = 2;


const heladoC = "Dulce de Leche";
let heladoCStock = 6;

const heladoD = "Tramontana";
let heladoDStock = 1;

const heladoE = "Frutilla";
let heladoEStock = 3;

const producto1 = "Cucurucho"
let producto1Precio = 120;

const producto2 = "1kg"
let producto2Precio = 400;
let prducto2Stock = 2;

const producto3 = "1/2kg"
let producto3Precio = 230;
let prducto3Stock = 2;



let precioCono = 0;
let listadoBochas ="\n";
let terminarCompra=0;
let cantidadBochas=0;
let saborBocha;
let seguirComprando=1;
let precioTotal = 0;


function venta1(producto, stock){
    if(stock<=0){
        alert('Nos quedamos sin stock de sabor '+producto+', te gustaría elegir otro?');
        i-=1;
    }else{
        listadoBochas = listadoBochas+'- '+producto+'\n';
        stock-=1;
    }
}

function venta2(producto, stock){
    if(stock<=0){
        alert('Nos quedamos sin potes de '+producto+', te gustaría elegir otro producto?');
    }else{
        stock-=1;
        console.log(stock);
    }

} 

function cantSabores(cantidad, precio){
    if(cantidad>0){
        precioTotal+=precio;
        console.log(precioTotal);
        for(let i = 0; i < cantidad; i++){
                sabor = prompt("Tenemoos los siguientes sabores disponibles"+"\n- "+heladoA+"\n- "+heladoB+"\n- "+heladoC+"\n- "+heladoD+"\n- "+heladoE+"\nIngrese el sabor n°: "+(i+1));
                sabor = sabor.toLowerCase();
                switch(sabor){
                    case "chocolate":
                        venta1(heladoA, heladoAStock);
                        break;
                    case "vainilla":
                        venta1(heladoB, heladoBStock);
                        break;
                    case "dulce de leche":
                        venta1(heladoC, heladoCStock);
                        break;
                    case "tramontana":
                        venta1(heladoD, heladoDStock);
                        break;
                    case "frutilla":
                        venta1(heladoE, heladoEStock);
                        break;
                }
        }
    } 
}


function cantBochas(cantidad, precio){
    if (cantidad>0){
        precioTotal+=cantidad*precio;
        console.log(precioTotal);
            for(let i = 0; i < cantidad; i++){
                saborBocha = prompt("Tenemoos los siguientes sabores disponibles"+"\n- "+heladoA+"\n- "+heladoB+"\n- "+heladoC+"\n- "+heladoD+"\n- "+heladoE+"\nIngrese el sabor de la bocha n°: "+(i+1));
                saborBocha = saborBocha.toLowerCase();
                switch(saborBocha){
                    case "chocolate":
                        venta1(heladoA, heladoAStock);
                        break;
                    case "vainilla":
                        venta1(heladoB, heladoBStock);
                        break;
                    case "dulce de leche":
                        venta1(heladoC, heladoCStock);
                        break;
                    case "tramontana":
                        venta1(heladoD, heladoDStock);
                        break;
                    case "frutilla":
                        venta1(heladoE, heladoEStock);
                        break;
                }
            }
    }
}



do{
    producto = parseInt(prompt('Bienvenido a Grido helados\nQue le gustaría pedir hoy?\n1- Cucurucho\n2- 1 Kg.\n3- 1/2 Kg.'));
    
    switch(producto){
    case(1):
    listadoBochas="\n";
    cantidadBochas = parseInt(prompt("De cuantas bochas va a querer su helado?"));
    cantBochas(cantidadBochas, producto1Precio);
    alert("Los sabores elegidos son:"+listadoBochas+'y el total es de: $'+precioTotal);
    break;
    case(2):
    listadoBochas="\n";
    cantidadSabores = parseInt(prompt("De cuantos sabores va a querer su helado?\n(Máximo 4 Sabores)"));
    cantSabores(cantidadSabores, producto2Precio);
    alert('Los sabores elegidos son: '+listadoBochas+'\nEl precio total sería de: $'+precioTotal);
    break;
    case(3):
    listadoBochas="\n";
    cantidadSabores = parseInt(prompt("De cuantos sabores va a querer su helado?\n(Máximo 3 Sabores)"));
    cantSabores(cantidadSabores, producto3Precio);
    alert('Los sabores elegidos son: '+listadoBochas+'\nEl precio total sería de: $'+precioTotal);
    break;
}

    stillBuying = parseInt(prompt('Quisiera agregar comprar algo más\n1- SI\n2- NO'));
    if(stillBuying==1){
        seguirComprando=1;
    }else if(stillBuying==2){
        seguirComprando=0;
}
    
} while(seguirComprando==1)

alert('Gracias por su compra!\nEl monto total a pagar es de: $'+precioTotal+'.')







