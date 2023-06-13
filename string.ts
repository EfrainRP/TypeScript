let pelicula:string = "Jurassic Park"; //comillas dobles
let serie:string = 'The Rookie';    //comillas simples
//comillas invertidas, template string, permite un string de varias lineas
let frase:string = `En la vida algunas veces se gana, 
otras veces se aprende
`; 

//operadores
let programas: string = "Mis programs favoritos son: " + pelicula + " y " + serie;
console.log(programas);

//temple string 

let programas2:string = `
    Mis programs favoritos son: ${pelicula} y ${serie}
`
console.log(programas2);

let edad_actual: number = 22;
let edad_futura: string = `
El siguiente mes mi edad sera ${edad_actual+1}

`;
console.log(edad_futura);

//metodos
console.log(programas.charAt(0))//letra en la posicion 0
console.log(programas.toUpperCase())//transforma todo a mayusculas