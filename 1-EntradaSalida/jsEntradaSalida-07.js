/* MOLINARI GERMAN, DIV H, EJERCICIO 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNum ;
	var segundoNum ; 
	var suma;

		 primerNum = txtIdNumeroUno.value ;
		 segundoNum = txtIdNumeroDos.value ;

		primerNum = parseInt(primerNum);
		segundoNum = parseInt(segundoNum);
		
		
			suma = (primerNum + segundoNum) ;

	alert("el resultado de la suma es: " + suma);

}

function restar()
{
	var primerNum ;
	var segundoNum ; 
	var resta;
		primerNum = txtIdNumeroUno.value ;
		segundoNum = txtIdNumeroDos.value ;

		primerNum = parseInt(primerNum);
		segundoNum = parseInt(segundoNum);

		resta = (primerNum - segundoNum) ;

		alert("El resultado de la resta es : " + resta);
}

function multiplicar()
{ 
	var primerNum;
	var segundoNum;
	var multiplicacion 

		primerNum = txtIdNumeroUno.value ;
		segundoNum = txtIdNumeroDos.value ;

		primerNum = parseInt(primerNum);
		segundoNum = parseInt(segundoNum);

	multiplicacion = (primerNum * segundoNum);

		alert("El resultado de la multiplicacion es: " + multiplicacion)

}

function dividir()
{
	var primerNum ;
	var segundoNum ; 
	var division ;

		primerNum = txtIdNumeroUno.value;
		segundoNum = txtIdNumeroDos.value;

		primerNum = parseInt(primerNum);
		segundoNum = parseInt(segundoNum);

	division = (primerNum / segundoNum) ;

		alert("El resultado de la division es: " + division)
}


//txtIdNumeroUno
//txtIdNumeroDos