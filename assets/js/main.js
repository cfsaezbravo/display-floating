(function displayNone(){
	//GetElementsById me retorna una colección de HTML elementos. En esta
	//colección no se puede hacer forEach, por lo que la transformo en un
	//arreglo con Array.from

	var cajas = Array.from(document.getElementsByClassName("caja"));

	cajas.forEach(function(e){
		//Poner sombrero a e;
		e.addEventListener("click", function(){
			this.classList.add("no");
		});
	});

	var boton = document.getElementById("mostrar");
	boton.addEventListener("click", function(el){

		//Previene el comportamiento por defecto

		el.preventDefault();

		cajas.forEach(function(e){
			e.classList.remove("no");
		})
	})
})()