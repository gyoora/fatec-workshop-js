//const x, y = 5;
//É preciso declarar as variáveis de forma separada. Ex:
const x = 5, y = 5; 
/* Ou:
const x = 5;
const y = 5;
*/

//x + 10 -> essa parte vai para dentro da função.

function somar() { // início da função.
  r = x + y + 10;
  console.log(r); //Console.log para mostrar o resultado no console.

} // fim da função

somar(); //Chamando a função somar.