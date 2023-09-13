

// 1. prendo i miei elementi per renderli dinamici

const containerSlider = document.querySelector(".images");
const secondSlider = document.querySelector(".second-carousel");


const images = [
  './img/01.webp',
  "./img/02.webp",
  "./img/03.webp",
  "./img/04.webp",
  "./img/05.webp",
]


const buttonTop = document.querySelector(".button-top");
const buttonBottom = document.querySelector(".button-bottom");
//  il bottoneTop di default è nascosto
buttonTop.classList.add("hide");

// 4. creo un contatore 
let counter = 0;

// 2. creo un ciclo for che ad ogni interazione mostri un'immagine

for(i = 0; i < images.length; i++) {
  let image = images[i];
  
  containerSlider.innerHTML += `<img src=${image} class="w-100 h-100 object-fit-cover img-fluid item hide">`
  secondSlider.innerHTML += `<img src=${image} class="w-100 object-fit-cover h-20 thumb">`

}


// 3. salvo le immagini in array aggiungendo nuove classi

let imagesCollection = document.getElementsByClassName("item");

 imagesCollection[counter].classList.remove("hide");


let thumbCollection = document.getElementsByClassName("thumb")
thumbCollection[counter].classList.add("active");

// 5. aggiungo/tolgo la classe hide/active alle immagini al click del bottone sotto

buttonBottom.addEventListener("click", function (){
     
  for(i = 0; i < thumbCollection.length; i++) {
      
    thumbCollection[counter + 1].classList.add("active");

    thumbCollection[i].classList.remove("active");

  }

  buttonTop.classList.remove("hide");

  imagesCollection[counter].classList.add("hide");

    // incremento il contatore 
  counter++;

  thumbCollection[counter].classList.add("active");

  if (counter === imagesCollection.length - 1) buttonBottom.classList.add("hide")

  imagesCollection[counter].classList.remove("hide");

}

)

// 6. aggiungo/tolgo la classe hide/active alle immagini al click del bottone sopra


buttonTop.addEventListener("click", function (){

  for(i = 0; i < thumbCollection.length; i++) {
      
    thumbCollection[counter - 1].classList.add("active");

    thumbCollection[i].classList.remove("active");

  }


  imagesCollection[counter].classList.add("hide");
       // decremento il contatore 
  counter--;
  
  if (counter === 0) {
    buttonTop.classList.add("hide");
    buttonBottom.classList.remove("hide");
  }

  imagesCollection[counter].classList.remove("hide");
  
})



