

function juego(){
    let areaProgramacion;  
    let lenguajeProgramacion;
    let respuesta = parseInt(prompt(`¿Qué area de la programación te gustaría seguir? Responde con el número 1 para el área de Front-End o 2 para para el área de Backe-End.`))
    if (respuesta == 1){
        areaProgramacion = "Front-End";
        lenguajeProgramacion = prompt(`¿Qué lenguaje del Front-End te gustaría aprender? Ingresa React o Vue` );
    } else {

        areaProgramacion = "Back-End";
        lenguajeProgramacion = prompt(`¿Qué lenguaje del Back-End te gustaría aprender? Ingresa C# o Java` );
    }

    let confirmacion = parseInt(prompt(`¿Te gustaría continuar especializandote en ${areaProgramacion} con ${lenguajeProgramacion} (responde con un 1) o prefieres convertirte en un desarrollador Fullstack(responde 2)?`));
    
    if (confirmacion == 1){
        let tecnologia = "";
        tecnologia = prompt('¿En qué tecnología te gustaría especializarte o conoces? ');
        while ( tecnologia != null ){
            alert(`${tecnologia} es una excelente opción para especializarte en ${areaProgramacion}`);
            tecnologia = prompt('¿En qué tecnología te gustaría especializarte o conoces? ');
        }
        juego()
    } else if(confirmacion == 2){
        juego()
    }
}


juego()