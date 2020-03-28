document.addEventListener("keyup",dibujarLinea);
var teclas= {
    up:38,
    down:40,
    left:37,
    right:39
}

var x = 150;
var y = 150;
var colorLinea = "blue";
var d = document.getElementById("lienzo");
var capa= d.getContext("2d");
var movimiento =10;

function linea(a,b,c,d,colorLinea,lienzo){

    lienzo.beginPath();
    lienzo.strokeStyle = colorLinea;
    lienzo.lineWidth=3;
    lienzo.moveTo(a,b);
    lienzo.lineTo(c,d);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarLinea(evento){
    
    if(evento.keyCode == teclas.down){
        linea(x,y,x,y+movimiento,colorLinea, capa)
        y = y+movimiento;
    }
    if(evento.keyCode == teclas.up){
        linea(x,y,x,y-movimiento,colorLinea, capa)
        y = y-movimiento;
    }
    if(evento.keyCode == teclas.left){
        linea(x,y,x - movimiento,y,colorLinea, capa)
        x = x-movimiento;
    }    
    if(evento.keyCode == teclas.right){
        linea(x,y,x + movimiento,y,colorLinea,capa)
        x = x+movimiento;    
    }
}