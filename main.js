/* let aprobado=7;

function datosDelAlumno(){
    let nombreAlumno = prompt("Ingrese el nombre del alumno:");
    let apellidoAlumno = prompt("Ingrese el apellido del alumno:");
    let dniAlumno = prompt("Ingrese DNI del alumno:");
    alert("Ud está por cargar las notas del alumno "+nombreAlumno+" "+apellidoAlumno+" DNI"+" " + dniAlumno);
    return datosCompletos = (nombreAlumno+" "+apellidoAlumno+" "+"DNI: "+dniAlumno)
}

function notasDelAlumno(datosCompletos){
    let notaAlumno = parseFloat(prompt("Ingrese nota del alumno"  +"\n para terminar ingrese 0"));
    let totalNotas=0;
    let cantidad=0;
    let condicion;
    while (notaAlumno!=0){
        totalNotas+=notaAlumno;
        cantidad++;
        notaAlumno = parseFloat(prompt("Ingrese nota del alumno"+"\n para terminar ingrese 0"));
    }
        
    let promedioDelAlumno=totalNotas/cantidad;
    
    if (promedioDelAlumno>=aprobado){
        condicion="APROBADO";
    }else{
        condicion="DESAPROBADO";
    }
        let alertMostrar = datosCompletos +"\nLa cantidad de notas del alumno son: " + cantidad +" \nEl promedio de notas es: " + promedioDelAlumno + " \nEl alumno está: " + condicion;
        alert(alertMostrar);
}

window.addEventListener("load", function () {
    let datosCompletos = datosDelAlumno();
    notasDelAlumno(datosCompletos);
});
 */




