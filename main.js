// Función para verificar la llegada de un día
function verificarLlegada(llegada) {
    switch(llegada) {
        case 'temprano':
            alert('Antes de las 7:15');
            break;
        case 'puntual':
            alert('Justo a las 7:15');
            break;
        case 'tarde':
            alert('Llegada después de las 7:20');
            break;
        case 'media falta':
            alert('Llegada después de las 7:30');
            break;
        case 'falta':
            alert('Llegada después de las 8:00');
            break;
        default:
            alert('Introdujiste una opción no válida');
    }
}

let llegadasSemana = ['temprano', 'puntual', 'tarde', 'media falta', 'falta']; //array

// Ciclo para verificar cada día
for (let i = 0; i < llegadasSemana.length; i++) {
    let llegadaDelDia = llegadasSemana[i];
    console.log(`Día ${i + 1}:`);
    verificarLlegada(llegadaDelDia); // Llamada a la función
}

// Condicional adicional con if
let tiemporequerido = 'llegadatemprana';
let preferenciadellegada = 'horariopuntual';
if ((tiemporequerido === 'llegadatemprana' && preferenciadellegada === 'horariopuntual') || tiemporequerido === 'llegadatarde') {
    console.log('Tienes el ingreso a clases');
} else {
    console.warn('Evita que se te marque la falta');
}

