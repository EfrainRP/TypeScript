var pelicula = "Jurassic Park"; //comillas dobles
var serie = 'The Rookie'; //comillas simples
//comillas invertidas, template string, permite un string de varias lineas
var frase = "En la vida algunas veces se gana, \notras veces se aprende\n";
//operadores
var programas = "Mis programs favoritos son: " + pelicula + " y " + serie;
console.log(programas);
//temple string 
var programas2 = "\n    Mis programs favoritos son: ".concat(pelicula, " y ").concat(serie, "\n");
console.log(programas2);
var edad_actual = 22;
var edad_futura = "\nEl siguiente mes mi edad sera ".concat(edad_actual + 1, "\n\n");
console.log(edad_futura);
//metodos
console.log(programas.charAt(0)); //letra en la posicion 0
console.log(programas.toUpperCase()); //transforma todo a mayusculas
