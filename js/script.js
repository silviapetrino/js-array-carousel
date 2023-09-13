// 1. prendo i miei elementi per renderli dinamici: immagini e bottoni

debugger;


const containerSlider = document.querySelector(".images");
const secondSlider = document.querySelector(".second-carousel");
const secondSliderImg = document.querySelector(".second-carousel img");



const images = [
 './img/01.webp',
 "./img/02.webp",
 "./img/03.webp",
 "./img/04.webp",
 "./img/05.webp",
]


const buttonTop = document.querySelector(".button-top");
const buttonBottom = document.querySelector(".button-bottom");

buttonTop.classList.add("hide");


// 3 creo un contatore 

let counter = 0;

// 2. creo un ciclo che ad ogni interazione mostri un'immagine

for(i = 0; i < images.length; i++) {
  let image = images[i];

  containerSlider.innerHTML += `<img src=${image} class="w-100 h-100 object-fit-cover img-fluid item hide">`

  secondSlider.innerHTML += `<img src=${image} class="w-100 object-fit-cover h-20 thumb">`

}

// 4. salvo le immagini in un array nuovo
  // perché ad ogni passaggio la classe hide andrà tolta dall'immagine, +inserisco una classe item all'immagine

let imagesCollection = document.getElementsByClassName("item");

let thumbCollection = document.getElementsByClassName("thumb")

 imagesCollection[counter].classList.remove("hide");

 thumbCollection[counter].classList.add("active");



// 5. aggiungo/tolgo la classe hide al click del bottone 



buttonBottom.addEventListener("click", function (){

  buttonTop.classList.remove("hide");

  imagesCollection[counter].classList.add("hide");

  counter++;

  thumbCollection[counter].classList.add("active");

  if (counter === imagesCollection.length - 1) buttonBottom.classList.add("hide")

  imagesCollection[counter].classList.remove("hide");

}

)


// 6. aggiungo/tolgo la classe hide al click del bottone 

buttonTop.addEventListener("click", function (){


  imagesCollection[counter].classList.add("hide");

  counter--;
  
  if (counter === 0) {
    buttonTop.classList.add("hide");
    buttonBottom.classList.remove("hide");
  }

  imagesCollection[counter].classList.remove("hide");



  
})