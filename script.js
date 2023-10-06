
var date= new Date();
var mes= date.getMonth();

switch(mes){
case 0:
	mes= "Enero";
	break;
case 1:
	mes= "Febrero";
	break;
case 2:
	mes= "Marzo";
	break;
case 3:
	mes= "Abril";
	break;
case 4:
	mes= "Mayo";
	break;
case 5:
	mes= "Junio";
	break;
case 6:
	mes= "Julio";
	break;
case 7:
	mes= "Agosto";
	break;
case 8:
	mes= "Septiembre";
	break;
case 9:
	mes= "Octubre";
	break;
case 10:
	mes= "Noviembre";
	break;
case 11:
	mes= "Diciembre";
	break;
default:
	mes= mes; 
}

document.getElementById('month').innerHTML= mes ;
document.getElementById('year').innerHTML= date.getFullYear();

var formularioPresupuesto= document.getElementById('presForm');//primer formulario
var gastosForm= document.getElementById('gastosForm'); //segundo formulario
const showPresupuesto= document.getElementById('showPresupuesto');//es un input
const showSaldoRestante= document.getElementById('showSaldoRestante'); // es un input
const inputPresupuesto= document.getElementById('presupuesto'); // es un input
var totalGastos= parseFloat(document.getElementById('totalGastos').innerHTML); // es un td
var presupuesto=0;
var showPresupuesto111= document.getElementById('showPresupuesto111')

formularioPresupuesto.addEventListener('submit', function (e){
	e.preventDefault();
	presupuesto= parseFloat(inputPresupuesto.value); 
	showPresupuesto.value= presupuesto; 
	showPresupuesto111.innerHTML= "$"+presupuesto; 
	inputPresupuesto.value="";

	formularioPresupuesto.hidden= true;
	contenedorIngresoExtra.hidden=false;
})

var ingresoExtraForm= document.getElementById('ingresoExtraForm');
var contenedorIngresoExtra= document.getElementById('contenedorIngresoExtra') ;

ingresoExtraForm.addEventListener('submit', function(ev){
	ev.preventDefault();
	var ingresoExtraInput = parseFloat(document.getElementById('ingresoExtraInput').value);
	presupuesto+= ingresoExtraInput;
	showPresupuesto111.innerHTML= "$"+presupuesto; 
	showPresupuesto.value= presupuesto; 

	ingresoExtraInput.value= "";

	var saldoRestante= presupuesto-totalGastos;
			showSaldoRestante.value=saldoRestante;


})


 gastosForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

            // Obtener los valores del formulario
            var nombreCategoria = document.getElementById('categoria').value;
            var monto = parseFloat(document.getElementById('monto').value);

  			//obtener la tabla donde aparecen las categorias que se agregan
            var tabla = document.getElementById('tablaCategorias');

            //crear nueva fila y celdas
		var newRow= document.createElement('tr');
		var newCategoria = document.createElement('td');
		var newMonto= document.createElement('td');

		//agregar datos a la celda
		newCategoria.textContent= nombreCategoria;
		newMonto.textContent= "$"+monto;
		
		//agregar las celdas a la fila
		newRow.appendChild(newCategoria);
		newRow.appendChild(newMonto);

		//agregar la fila a la tabla
		tabla.appendChild(newRow);

		totalGastos+=monto;
			document.getElementById('totalGastos').innerHTML= "$"+totalGastos;

			var saldoRestante= presupuesto-totalGastos;
			showSaldoRestante.value=saldoRestante;

		//dejar en blanco el formulario
		document.getElementById('categoria').value= "";
		document.getElementById('monto').value= "";
        });

document.getElementById('totalGastos').innerHTML= "$"+totalGastos;






