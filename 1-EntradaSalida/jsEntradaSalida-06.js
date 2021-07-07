/* 
Molinari German, Div H, Ejercicio 6
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ 	var numeroUno ;
	var numeroDos ;
	var suma;
			numeroUno = txtIdNumeroUno.value;
			numeroDos = txtIdNumeroDos.value;
			
			numeroUno = parseInt(numeroUno);
			numeroDos = parseInt(numeroDos)

			suma = numeroUno + numeroDos;	
				
			

	alert("el resultado es: " + suma);

}
//txtIdNumeroUno
//txtIdNumeroDos
/*Entradas: dos numeros
 Procesos: realizar la suma de los dos numeros
 Salidas: resultado de la suma de los dos numeros

/* ENTRADAS: prompt 
				id.value
				document.getelementbyID
				X = id.value
PROCESOS:
		+; -; *; /; %;

		
SALIDA: alert
		console.log
		document.write
		id.value = x
*/ 