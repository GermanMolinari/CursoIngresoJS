/* /*Molinari German, Div H, Parcial 2019 EJ 2.
A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos
  y el promedio de peso xx  */
function mostrar()
{
  var pareja;
  var parejabis;
  var pesoPareja;
  var pesoParejabis;
  var promedio;

  pareja = prompt("Ingrese su nombre");
  parejabis =prompt("Ingrese el nombre de su pareja");

  pesoPareja = prompt("Ingrese su peso");
  pesoPareja = parseInt(pesoPareja);


  pesoParejabis = prompt("Ingrese el peso de su pareja");
  pesoParejabis = parseInt(pesoParejabis);

  promedio = (pesoParejabis + pesoPareja) / 2 ;

  alert("Ustedes se llaman " + pareja + "y " + parejabis + " y pesan " + pesoPareja+ " y " + pesoParejabis + " kilos, y promedian un total de " + promedio + " kilos" ) ;


}
