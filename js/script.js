// 1. prendo i miei elementi per renderli dinamici: immagini e bottoni

debugger;

const images = [
 '../img/01.webp',
 "../img/02.webp",
 "../img/03.webp",
 "../img/04.webp",
 "../img/05.webp",
]

console.log(images);

const containerSlider = document.querySelector(".images");

containerSlider.innerHTML = " ";

const buttonTop = document.querySelector(".button-top");
const buttonBottom = document.querySelector(".button-bottom");

// 3 creo un contatore 

let counter = 0;

// 2. creo un ciclo che ad ogni interazione mostri un'immagine

for(i = 0; i < images.length; i++) {
  let image = images[i];

  containerSlider.innerHTML += `<img src=${image} class="w-100 h-100 object-fit-contain img-fluid item hide">`

}

// 4. salvo le immagini in un array
//  perché ad ogni passaggio la classe hide andrà tolta dall'immagine, inserisco una classe item all'immagine

const imagesCollection = document.getElementsByClassName("item");

imagesCollection[counter].classList.remove("hide");

// 5. aggiungo/tolgo la classe hide al click del bottone 

buttonBottom.addEventListener("click", function (){
  
  imagesCollection[counter].classList.add("hide");

  counter++;

  imagesCollection[counter].classList.remove("hide");

  
})

// 6. aggiungo/tolgo la classe hide al click del bottone 

buttonTop.addEventListener("click", function (){
  
  imagesCollection[counter].classList.add("hide");

  counter++;

  imagesCollection[counter].classList.remove("hide");

  
})