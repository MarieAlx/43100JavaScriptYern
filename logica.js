//segunda pre entrega
console.table(alumnos);


//funcion para poder filtrar por nota
function filtrarPorNota(nota) {
    return alumnos.filter(alumno => {
    const promedio = (alumno.notas.tarea1 + alumno.notas.tarea2 + alumno.notas.tarea3) / 3;
    return promedio >= nota;
    });
}


//dato de entrada
let notaProm = parseFloat(prompt('Ingresa la nota promedio que deseas ver:  \n7: para ver los alumnos aprobados\n (1-10): para ver los alumnos con ese promedio o mayor \n0 para salir'));

while(notaProm !== 0){
    if(isNaN(notaProm) || notaProm < 0){
        alert('Ingrese un numero valido 😫');
    }else{
        //ya tenemos un numero valido
        const alumnosFiltrados = filtrarPorNota(notaProm);
        console.table(alumnosFiltrados);
        
    }
    notaProm = parseFloat(prompt('Ingresa la nota promedio que deseas ver:  \n7: para ver los alumnos aprobados\n (1-10): para ver los alumnos con ese promedio o mayor \n0 para salir'));
}

