class Medicina {
    constructor(nombre, apellido, edad, sexo, nacionalidad, cedula, ciudad, direccion, telefono, correoElectronico, comentario){
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.sexo = sexo;
       this.nacionalidad = nacionalidad;
       this.cedula = cedula;
       this.ciudad = ciudad;       
       this.direccion = direccion;
       this.telefono = telefono;
       this.correoElectronico = correoElectronico;
       this.comentario = comentario;
    }
}

let boton = document.getElementById("botonEnviar");
let interrogador = document.getElementById("interrogador");

const guardarDatos = (clave, valor) => {localStorage.setItem(clave, valor);}

interrogador.addEventListener("submit", function(e){
	e.preventDefault()
})

function datosPersonales(){
	let nombre = document.getElementById("nombre").value;
	let apellido = document.getElementById("apellido").value;
	let edad = document.getElementById("edad").value;
	let sexo = document.getElementById("sexo").value;
	let nacionalidad = document.getElementById("nacionalidad").value;
    let cedula = document.getElementById("cedula").value;
    let ciudad = document.getElementById("ciudad").value;
	let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
	let correoElectronico = document.getElementById("correoElectronico").value;
	let comentario = document.getElementById("comentario").value;
	
	if(nombre == "" || apellido == "" || edad == "" || sexo == "" || nacionalidad == "" || cedula == "" || ciudad == "" || direccion == "" || telefono == "" || correoElectronico == "" || comentario == ""){
		respuesta.innerHTML = "¡¡Falta rellenar algunos campos, POR FAVOR RELLENAR LOS CAMPOS FALTANTE!!";
		respuesta.classList.remove("invisible");
	}
	else {
		let paciente = new Medicina(nombre, apellido, edad, sexo, nacionalidad, cedula, ciudad, direccion, telefono, correoElectronico, comentario);
		let inJSON = JSON.stringify(paciente);
		guardarDatos("formulario", inJSON);
		respuesta.innerHTML = "¡¡FELICIDADES!! Sus datos fueron enviados... dentro de 24HRS nos contactaremos con usted Sr(a) " + nombre + " " + apellido + ".";
		respuesta.classList.remove("invisible");
		let resultado = nombre + " " + apellido + " " + edad + " " + sexo + " " + nacionalidad + " " + ciudad + " " + direccion + " " + correoElectronico + " " + comentario;
		console.log(resultado);
        interrogador.remove();
	}
}
boton.addEventListener("click", datosPersonales);