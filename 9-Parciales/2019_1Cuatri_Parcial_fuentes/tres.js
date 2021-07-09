/* /*Molinari German, Div H, Parcial 2019 EJ 3.
Pedir por prompt el precio y el porcentaje de descuento,
 mostrar el precio final con descuento por id. */
function mostrar()
{
	var precio;
	var descuentoC;
	var descuentoT

	precio = prompt("Ingrese el precio");
	precio = parseInt(precio);

	descuentoC = prompt("ingrese el porcentaje de descuento");
	descuentoC = parseInt(descuentoC);

	descuentoT = precio * (descuentoC / 100);

	document.getElementById('elPrecioFinal').value =  precio - descuentoT; 

}

//elPrecioFinal