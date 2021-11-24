function cuandoPaginaCarga(){
	var numeroVisitas = localStorage.getItem("numeroVisitas"); // Recuperar visitas del navegador
	numeroVisitas++; // Incrementar numeroVisitas en 1
	document.getElementById("contadorEntradas").innerText = "Número de visitas: " + numeroVisitas; // Cambiar texto interior del p
	localStorage.setItem("numeroVisitas", numeroVisitas); // Guardar valor de numeroVisitas en navegador
}