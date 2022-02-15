let heladoA = "Chocolate";
let heladoAStock = 4;
let heladoAPrecio = 120;

let heladoB = "Vainilla";
let heladoBStock = 2;
let heladoBPrecio = 150;

let heladoC = "Dulce de Leche";
let heladoCStock = 6;
let heladoCPrecio = 600;

let heladoD = "Tramontana";
let heladoDStock = 1;
let heladoDPrecio = 250;

let heladoE = "Frutilla";
let heladoEStock = 3;
let heladoEPrecio = 250;


let precioCono = 0;
let listadoBochas ="\n";
let terminarCompra=0;
let cantidadBochas=0;

cantidadBochas = parseInt(prompt("Bienvenido a Grido Helados!\nDe cuantas bochas va a querer su helado?"));
if (cantidadBochas>0){
    for(let i=0; i<cantidadBochas; i++){
        saborBocha = prompt("Tenemoos los siguientes sabores disponibles"+"\n- "+heladoA+"\n- "+heladoB+"\n- "+heladoC+"\n- "+heladoD+"\n- "+heladoE+"\nIngrese el saborde la bocha n°: "+(i+1))
        switch(saborBocha){
            case "Chocolate":
            case "chocolate":
            case "CHOCOLATE":
                if(heladoAStock<=0){
                    alert('Nos quedamos sin stock de sabor '+heladoA+' te gustaría elegir otro?')
                    i-=1;
                    break;
                }
                precioCono+=heladoAPrecio;
                listadoBochas = listadoBochas+'- '+heladoA+'\n';
                heladoAStock-=1;
                break;
            case "Vainilla":
            case "vainilla":
            case "VAINILLA":
                if(heladoBStock<=0){
                    alert('Nos quedamos sin stock de sabor '+heladoB+' te gustaría elegir otro?')
                    i-=1;
                    break;
                }
                precioCono+=heladoBPrecio;
                listadoBochas = listadoBochas+'- '+heladoB+'\n';
                heladoBStock-=1;
                break;
            case "Dulce de Leche":
            case "dulce de leche":
            case "DULCE DE LECHE":
                if(heladoCStock<=0){
                    alert('Nos quedamos sin stock de sabor '+heladoC+' te gustaría elegir otro?')
                    i-=1;
                    break;
                }
                precioCono+=heladoCPrecio;
                listadoBochas = listadoBochas+'- '+heladoC+'\n';
                heladoCStock-=1;
                break;
            case "Tramontana":
            case "tramontana":
            case "TRAMONTANA":
                if(heladoDStock<=0){
                    alert('Nos quedamos sin stock de sabor '+heladoD+' te gustaría elegir otro?')
                    i-=1;
                    break;
                }
                precioCono+=heladoDPrecio;
                listadoBochas = listadoBochas+'- '+heladoD+'\n';
                heladoDStock-=1;
                break;
            case "Frutilla":
            case "frutilla":
            case "FRUTILLA":
                if(heladoEStock<=0){
                    alert('Nos quedamos sin stock de sabor '+heladoE+' te gustaría elegir otro?')
                    i-=1;
                    break;
                }
                precioCono+=heladoEPrecio;
                listadoBochas = listadoBochas+'- '+heladoE+'\n';
                heladoEStock-=1;
                break;
    }
}
alert('El precio de su helado será de: $'+precioCono+"\nY los sabores elegidos son:"+listadoBochas+"\n")
}






