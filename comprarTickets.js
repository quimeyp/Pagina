document.getElementById("resumenBoton").addEventListener("click", botonResumen); 
    

    function botonResumen(event){
    event.preventDefault();

    const cantidadTickets = parseInt(document.getElementById("cantidad").value);

    const categoriaSel = document.getElementById("categoria").value;

    
    const descuentos = {
        Estudiante: 0.8,
        Trainee: 0.5,
        Junior: 0.15
    }

    const precioTicket = 200;
    const descuento = descuentos[categoriaSel] || 0;
    const precioFinal = cantidadTickets * precioTicket * (1 - descuento);

    document.getElementById("precioFinal").textContent = precioFinal.toFixed(2);

    };


var inputfocused = "";

document.getElementById("borrarBoton").onclick = limpiaCampo;

var elements = document.querySelectorAll("input[type='text'],input[type='email']");

for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("focus", function () {
        inputfocused = this;
    });
}

function limpiaCampo() {
    inputfocused.value = "";
}




