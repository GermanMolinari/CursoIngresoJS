/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados
 con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en 
Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var fahrenheitIngresados;
	var centigradosFinal;

	fahrenheitIngresados = txtIdTemperatura.value;
	fahrenheitIngresados= parseFloat(fahrenheitIngresados);

	centigradosFinal = (fahrenheitIngresados-32) * (5/9);

	alert("La temperatura en centigrados es de: " + centigradosFinal + " grados");
}

function CentigradosFahrenheit () 
{
	var centigradosIngresados;
	var fahrenheitFinal;
	
	centigradosIngresados = txtIdTemperatura.value;
	centigradosIngresados = parseFloat(centigradosIngresados);

	fahrenheitFinal = centigradosIngresados * 1.8 + 32;

	alert("La temperatura en Fahrenheit es: " + fahrenheitFinal + " grados");

}
//txtIdTemperatura