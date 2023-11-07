

if (window.location.href.includes("register.html")){
document.getElementById("enviarRegistro").addEventListener("click", function(e) {
			e.preventDefault();
			var nameRegistro = document.getElementById('nameRegistro').value;
			var emailRegistro = document.getElementById('emailRegistro').value;
			var passRegistro = document.getElementById('passRegistro').value;
			var confirmPass = document.getElementById('confirmPass').value;

			if (passRegistro != confirmPass) {
				alert('Sus contraseña no coinciden, intente otra vez');

			}
			if (passRegistro == confirmPass && !isBlank(confirmPass)){
				alert('Sus credenciales han sido guardadas correctamente')
				 setTimeout(window.location.href = "login.html", 5000); }
		          
		    })  
} else if (window.location.href.includes("login.html")) {

document.getElementById('enviar').addEventListener('click', function(e){
	e.preventDefault();
	var emailLogin= document.getElementById('emailLogin').value;
	var passLogin = document.getElementById('passLogin').value;
	if (emailLogin=="budget@record.expotech" && passLogin== "12345") {
		window.location.href = "main.html"
	}
	else{
		if ( (emailLogin!="budget@record.expotech" &&  passLogin == "12345")|| (passLogin != "12345" && emailLogin=="budget@record.expotech")) {
			alert('Una de sus credenciales es incorrecta')
		}
		else{
			alert('Ese usuario y esa contraseña no existe')
			}
	}

})
} else if (window.location.href.includes("index.html")) {
	var ingresos = 0
	const showSaldoRestante= document.getElementById('showSaldoRestante')
	
		document.getElementById('enviarIngreso').addEventListener("click", function (e){
			e.preventDefault();
			
			ingresos += parseFloat(document.getElementById('ingresos').value)
			document.getElementById('showIngresos').innerHTML= '$'+ingresos;
			document.getElementById('ingresos').value= ""
			//document.getElementById('contenedorIngresos').style.display= "none";
				var saldoRestante= ingresos-totalGastos;
			showSaldoRestante.innerHTML="$"+saldoRestante;
		})

		var totalGastos=0;

		document.getElementById('gastosForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Evitar que se recargue la página al enviar el formulario

            // Obtener los valores del formulario
            var nombreCategoria = document.getElementById('gasto').value;
            var monto = parseFloat(document.getElementById('monto').value);

  			//obtener la tabla donde aparecen las categorias que se agregan
            var tabla = document.getElementById('tablaCategorias');

            //calcular porcentaje
		let porcentaje= (monto/ingresos)* 100 + "%";

		//asignar color random
		let colores=["#257e1a", "#3d952f", "#6ec35b", "#55ac45", "#86da71", "#176e13", "#2e8226", "#005a00", "#39c222", "#26b017"  ]
		var numeroRandom = Math.floor(Math.random() * 11)
		var color= colores[numeroRandom]

            //crear nueva fila y celdas
		var newRow= document.createElement('tr');
		var newCategoria = document.createElement('td');
		var newMonto= document.createElement('td');
		var newGrafico= document.createElement('td')
		var newProgress= document.createElement('div')
		var newBar= document.createElement('div')

		//agregar datos a la celda
		newCategoria.textContent= nombreCategoria;
		newMonto.textContent= "$"+monto;
		

         //clases barra
         newProgress.classList.toggle("progress")  
         newBar.classList.toggle('progress-bar')
         newBar.style.width= porcentaje;
         newBar.style.backgroundColor= color; 
         newProgress.appendChild(newBar)
         newGrafico.appendChild(newProgress)

		
		//agregar las celdas a la fila
		newRow.appendChild(newCategoria);
		newRow.appendChild(newMonto);
		newRow.appendChild(newGrafico);

		//agregar la fila a la tabla
		tabla.appendChild(newRow);

		totalGastos+=monto;
			document.getElementById('totalGastos').innerHTML= "$"+totalGastos;

			var saldoRestante= ingresos-totalGastos;
			showSaldoRestante.innerHTML="$"+saldoRestante;

		//dejar en blanco el formulario
		document.getElementById('gasto').value= "";
		document.getElementById('monto').value= "";

		           	            
        });

}
