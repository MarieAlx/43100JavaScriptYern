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
let notaProm = parseFloat(prompt('Ingresa el promedio de notas que deseas ver 0-para salir'));

while(notaProm !== 0){
    if(isNaN(notaProm) || notaProm < 0){
        alert('Ingrese un numero valido 😫');
    }else{
        //ya tenemos un numero valido
        const alumnosFiltrados = filtrarPorNota(notaProm);
        console.table(alumnosFiltrados);
        
    }
    notaProm = parseFloat(prompt('Ingresa el promedio de notas que deseas ver 0-para salir'));
}

