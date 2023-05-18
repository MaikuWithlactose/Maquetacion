
let solicitudes = [];


function enviarForm(event) {
    event.preventDefault(); 
    const nombre = document.getElementById("nombre").value;
    const origen = document.getElementById("origen").value;
    const destino = document.getElementById("destino").value;
    const personas = document.getElementById("personas").value;
    const fecha = document.getElementById("fecha").value;

    const solicitud = {
        nombre, origen, destino, personas, fechas,
    };
   

    solicitudes.push(solicitud)

    console.log("se ha enviado");

   
    document.querySelector("form").reset();

   
    for (let i = 0; i < solicitudes.length; i++) {
}
};

function filtrarSol() {
    const destinosPermitidos = ["canarias", "mallorca", "galicia"];
    let datosFiltrados = "";

    for (let i = 0; i < solicitudes.length; i++) {
        let destino = solicitudes[i].destino.toLowerCase();
        if (destinosPermitidos.includes(destino)) {
            console.log(solicitudes[i]);
            datosFiltrados += `Nombre: ${solicitudes[i].nombre}, Origen: ${solicitudes[i].origen} Destino: ${solicitudes[i].destino} Personas: ${solicitudes[i].personas} Fechas: ${solicitudes[i].fecha}<br>`;
        }
    }
    document.getElementById("datosFiltrados").innerHTML = datosFiltrados;
}