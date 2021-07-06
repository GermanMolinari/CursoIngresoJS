/* MOLINARI GERMAN, EJERCICIO 4, DIVISION H
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{	var nombreIngresado
	nombreIngresado = prompt ("ingrese su nombre ");
	document.getElementById ("txtIdNombre").value = nombreIngresado ;
	alert("ok");

}

//id="txtIdNombre"