# Basic-JS : Básicos de JavaScript

# Coerción
La coerción es la conversión automática o implicita de valores de un tipo de dato a otro (Ejemplo: de cadena de texto a número). La conversión es similar a la coerción porque ambas convierten valores de un tipo de dato a otro pero con una diferencia clave - la coerción es implícita mientras que la conversión puede ser implícita o explícita.

### Ejemplos  
  
Coerción implicita
~~~
var a = 20;
var b = a + ""; 
~~~

Coerción explicita
~~~
var c = String( a );
var d = Number( c );

var c = "100"; 
var d = +c; // Unary operator '+' de forma explícita convierte a número
~~~

Number + Number = Number  
Number + String = String  
String + Number = String  
String + String = String  

### Ejemplo  

~~~
const valor1 = '5';
const valor2 = 9;
let suma = valor1 + valor2;

console.log(suma);
~~~

En el ejemplo anterior, JavaScript ha coercido el 9 de nùmero a cadena de texto y luego ha concatenado los dos valores resultando en una cadena de texto de 59. JavaScript tuvo la opción de coercer a cadena de texto o número y decidió usar número.
