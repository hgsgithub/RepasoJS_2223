function visualizarHoraActual() {
    // Recuperación de la hora del sistema
    var miReferenciaTiempo = new Date();

    // Conversión de la hora del sistema en formato local (hh:mm:ss)
    var hhmmss = miReferenciaTiempo.toLocaleTimeString();
    var ddmm = miReferenciaTiempo.toLocaleDateString();
    // Visualización del span horaEnCurso 
    document.getElementById("horaEnCurso").innerHTML= hhmmss ;
    document.getElementById("Fechactual").innerHTML= ddmm 

    }

// myInterval = setInterval(function, milliseconds);
// Para cerrar clearInterval(myInterval); 
var miHora = setInterval(function() {
    visualizarHoraActual()
}, 2000);

