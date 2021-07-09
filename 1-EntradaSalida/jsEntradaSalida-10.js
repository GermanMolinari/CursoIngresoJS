/*German Molinari, Div H, Ejercicio 10
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento que va a ingresar el usuario
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var descuentoIngresado;
	var importeIngresado;
	var totDescuento;
	var total;

		importeIngresado = txtIdImporte.value ;
		importeIngresado = parseInt(importeIngresado) ;
		descuentoIngresado = prompt("ingrese el porsentaje de descuento que desea: ");

		descuentoIngresado = parseInt(descuentoIngresado);
		descuentoIngresado = (descuentoIngresado / 100);

		totDescuento = importeIngresado * descuento ;

		total =  importeIngresado - totDescuento ;
	document.getElementById('txtIdResultado').value = total ;

	 
}

//txtIdImporte
//txtIdResultado