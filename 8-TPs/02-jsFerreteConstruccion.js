/*

2.	Para el departamento de Construcción:
A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y
 se debe alambra con tres hilos de alambre.
C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.

*/

function Rectangulo () 
{
  var largoTerrno;
  var anchoTerreno;
  var perimetro;

  largoTerreno = txtIdLargo.value;
  anchoTerreno = txtIdAncho.value; 

  largoTerreno = parseFloat(largoTerreno);
  anchoTerreno = parseFloat(anchoTerreno);

  perimetro = (largoTerreno * anchoTerreno) * 3 ;

  alert("La cantidad de alambre que se debe utilizar es de: " + perimetro + " metros");


}
function Circulo () 
{
	var radioIngresado;
  var perimetro;
  var cantidadAlambre;

  radioIngresado = txtIdRadio.value;
  radioIngresado = parseFloat(radioIngresado);

  perimetro = 2*(3.14)*radioIngresado;
  cantidadAlambre = perimetro * 3;
  
  alert("La cantidad de alambre que se necesita es de: " + cantidadAlambre);

}
function Materiales () 
{
  var largoTerreno;
  var anchoTerreno;
  var perimetro;
  var cantidadCemento;
  var cantidadCal;

  largoTerreno = txtIdLargo.value;
  largoTerreno = parseFloat(largoTerreno);
  anchoTerreno = txtIdAncho.value;
  anchoTerreno = parseFloat(anchoTerreno);

  perimetro = largoTerreno * anchoTerreno;
  cantidadCemento = perimetro * 2;
  cantidadCal = perimetro * 3;

  alert("Usted necesita: " + cantidadCemento +" bolsas de cemento y "+ cantidadCal + " bolsas de cal");

}

//txtIdLargo
//txtIdAncho
//txtIdRadio