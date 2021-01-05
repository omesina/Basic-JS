var miAuto = {
    marca: "Toyota",  // key - value 
    modelo: "Corolla",
    anio: 2020,
    detallesDelAuto: function() {   // Metodo de un objeto (una función dentro de un objeto)
      return `Auto ${this.modelo} ${this.annio}`;
  }
};

miAuto.anio 
miAuto.modelo 
miAuto.detallesDelAuto(); 

// Función constructora 
function auto(marca, modelo, annio) {  // Creas una función con los parametros que va a recibir, 
    this.marca = marca;   // Utilizamos el "this" para asignar valores a las propiedades del objeto 
    this.modelo = modelo;
    this.annio = annio;
}

//Array
var autos = [];

for(let i = 0 ; i < 30 ; i++){
  let marca = `Marca ${i}`;
  let modelo = `Modelo ${i}`;
  let annio = 2021;
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}