const numero = 4;
const numero2 = 2;

console.log(numero + numero2);


//levantar cosas desde el dom
/*
const  h1 = document.querySelector('h1');
const parrafito = document.querySelector('.parrafito');
const parrafoId = document.querySelector('#pId');//el query selector funciona como CSS para seleccionar.
const entrada = document.querySelector('input');

console.log(h1);
console.log(parrafito);
console.log(parrafoId);
console.log(entrada); */


/* console.log({
  h1,
  parrafito,
  parrafoId,
  entrada
}); */


/* console.log('Valor por defecto del input: ',entrada?.value);
 */

//Manipulación del DOM.

/* h1?.innerHTML = "coca papi <br> feo"; */

/* h1?.getAttribute('tituloPrincipal');


console.log(h1?.getAttribute('class'));

h1?.setAttribute('class','red'); // modificamos nuestros atributos en HTML.


h1?.classList.add('green'); //agrega la clase.

h1?.classList.remove('green'); */
/*
entrada.value = 'facup'; */

/* document.createElement('img');

console.log(document.createElement('img'));


let image = document.createElement('img');

image.setAttribute('src','https://www.photolari.com/wp-content/uploads/2023/09/nikon-135mm-plena-02.jpg');

console.log(image);
 */
//colocar la imagen:
/* parrafoId?.appendChild(image); */


//Eventos de JS


const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const button = document.querySelector('#btnSumar');
const result = document.querySelector('.result');
const input3 = document.querySelector('#calculo3');
const input4 = document.querySelector('#calculo4');
const result2 = document.querySelector('.result2');
const buttonRestar = document.querySelector('#btnRestar');
const form = document.querySelector('#formulario');



button?.addEventListener('click',btnOnClick);//evento y funcion.No hace falte ponerle paréntesis ya que el mismo EvenListener lo ejecuta.
form.addEventListener('submit',restarNumeros); // resta de numeros

function btnOnClick(){
 /*  console.log(parseInt(input1?.value) + parseInt(input2?.value)); */
  const sumaInputs = parseInt(input1?.value) + parseInt(input2?.value);
  result?.innerText = "Resultado: " + sumaInputs;
}

function restarNumeros(event){
  /* console.log({event}); */

  const restaNumeros = parseInt(input3?.value) - parseInt(input4?.value);
  result2?.innerText = 'Resultado de la resta: ' + restaNumeros;
  event.preventDefault();
 }

