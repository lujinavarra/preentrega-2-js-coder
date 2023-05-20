//declaramos  una clase para crear los objetos con la nomina de profesionales
class Profesional {
        constructor(nombre, servicio, honorarios){
        this.nombre = nombre;
        this.servicio = servicio;
        this.honorarios = honorarios;
        }
}

//genero los profesionales instanciando la class
const profesional1 = new Profesional("Dra Carina Guzman", "Pediatría", 2000);
const profesional2 = new Profesional("Dra Tatiana Rodrigo", "Neurocirugía", 3000);
const profesional3 = new Profesional("Dra Carolina Balduzzi", "Gastroenterología", 2000);
const profesional4 = new Profesional("Dr Hugo Morero", "Cirugía", 3000);
const profesional5 = new Profesional("Dr Florencio Sanchez", "Traumatología", 2500);


//establecemos un array con todos los profesionales que hay
const staff = [profesional1, profesional2, profesional3, profesional4, profesional5];


//declaro un objeto para carga de los pacientes
class Paciente {
        constructor(nombrePaciente, dni, telefono){
        this.nombrePaciente = nombrePaciente;
        this.dni = dni;
        this.telefono = telefono;
        }
}

//mensajes al usuario
alert("¡Hola! Bienvenido/a a la página del Centro de Salud Integral.");

//defino variables y arreglos para que el usuario pueda ingresar los servicio que quiere obtener
const servicios = [];
let precioTotal = "";
let opcion = "";

//pido datos al usuario para agendar el turno
let nombrePaciente = prompt("Por favor, ingrese su nombre y apellido");
let reglaNombrePaciente = isNaN(nombrePaciente);

let dni = parseInt(prompt("Ingrese su DNI"));
let reglaDni = Number(dni) >0;

let telefono = parseInt(prompt("Ingrese su número de teléfono"));
let reglaTelefono = Number(telefono) >0;


//Hacemos que el usuario ingrese parámetros en un ciclo, del cual resumiremos su adquisición
while (opcion !== "salir") {
  opcion = prompt("A continuación se muestra la lista de profesionales con quien puedes agendar una cita: \n" + staff.map((servicio, index) => index + 1 + ")" + servicio.nombre +" " + servicio.servicio).join("\n") + "\n ¿Con que profesional desea reservar su turno?\n (Escriba el numero de la opcion elegida o escriba 'salir' para salir)");
  if (opcion >= 1 && opcion <= staff.length) {
    const profesionalSeleccionado = staff[opcion - 1];
    servicios.push(profesionalSeleccionado);
    alert("Su turno se agendó correctamente");
  while (opcion !== "si" && opcion !== "no") {
    opcion = prompt("¿Desea agendar otro turno? \n (si/no)").toLowerCase();
  }
    if (opcion === "no") {
      opcion = "salir";
      precioTotal = servicios.reduce((acumulador, servicioSeleccionado) => acumulador + servicioSeleccionado.honorarios, 0);
      alert("Turnos agendados:\n" + servicios.map((servicio, index) => index + 1 + ") " + servicio.nombre + " $" + servicio.honorarios).join("\n") + "\n" + "Total a pagar $" + parseInt(precioTotal));    
        } 
}}

//valido si los datos ingresados por el usuario son válidos

if (reglaNombrePaciente === true && reglaDni === true && reglaTelefono === true){
        const pacientes1 = new Paciente (nombrePaciente, dni, telefono);
        alert (pacientes1.nombrePaciente + ", nos pondremos en contacto con usted al numero " + pacientes1.telefono + " para definir fecha y horario del turno. Muchas gracias por elegirnos");
} else {
        alert("Sus datos no fueron cargados correctamente, por favor realice nuevamente su selección");
}
