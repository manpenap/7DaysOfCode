let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
alert( `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);
preguntaAdicionl();



function preguntaAdicionl(){
    let respuesta = parseInt(prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 para SÍ o 2 para NO.`));
    if (respuesta == 1){
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else if (respuesta == 2){
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
        alert("Por favor, responde con el número 1 o 2.");
        preguntaAdicionl();
    }
}



