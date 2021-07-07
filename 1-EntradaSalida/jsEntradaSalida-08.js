/* Molinari German, Div H, Ejercicio 08
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{ 
	var nDividendo ;
	var nDivisor ;
	var division ;
	var resto ;

		nDividendo = txtIdNumeroDividendo.value ;
		nDivisor = txtIdNumeroDivisor.value ;

		nDividendo = parseInt(nDividendo);
		nDivisor = parseInt(nDivisor);

		division = nDividendo / nDivisor ;
		resto = (nDividendo % nDivisor);

		alert("el resultado de la division es : " + division + "y el resto es: " + resto);

	
}

//txtIdNumeroDividendo
//txtIdNumeroDivisor