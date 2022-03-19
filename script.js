let button = document.querySelector("button");
let botao = document.querySelector(".botao2");

let novapalavra= 0;
let descriptografia = 0;
let texto= document.querySelector(".texto");
let textonovo= document.querySelector(".novo");
let copia= document.querySelector("#copy");



button.addEventListener('click', function crip(){
  Criptografar(texto);
  event.preventDefault();
})

botao.addEventListener('click', function descrip (){
  Descriptografar(texto);
  event.preventDefault();
})

copia.addEventListener('click', function copiar (){
  let novo = document.querySelector(".novo");
  novo.select();
  document.execCommand('copy');
})
function Criptografar(texto){
  let input = document.querySelector(".velho").value;
  let novapalavra= input.replace(/e/gi,"enter").replace(/a/gi,"ai").replace(/i/gi,"imes").replace(/o/gi,"ober").replace(/u/gi,"ufat");
  textonovo.textContent=novapalavra;
  console.log(novapalavra);
}

function Descriptografar(texto){
  let input = document.querySelector(".novo").value;
  let descriptografia= input.replace(/enter/gi,"e").replace(/ai/gi,"a").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u").replace(/mes/gi,"i");
  textonovo.textContent=descriptografia;
  console.log(novapalavra);
}

