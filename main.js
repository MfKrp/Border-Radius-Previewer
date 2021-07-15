//Captura de variables y elementos que se van a utilizar y modificar
const box = document.querySelector("#stylised-box"); //contenedor a modificar

const topLeft = document.querySelector("#upper-left-side");
const topRight = document.querySelector("#upper-right-side");
const bottomLeft = document.querySelector("#lower-left-side");
const bottomRight = document.querySelector("#lower-right-side");
const copyButton = document.getElementById("copyButton"); //button that copies the text inside the boxes where the numbers introduced
const writingBox = document.querySelector("#results_box");

let topLeftProperty = `border-top-left-radius: 0px;`;
let topRightProperty = `border-top-right-radius: 0px;`;
let bottomLeftProperty = `border-bottom-left-radius: 0px;`;
let bottomRightProperty = `border-bottom-right-radius: 0px;`;

writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
//funciones
/* REVISAR NO ESTA COMPLETAMENTE ENTENDIDO LO QUE SE HACE EN ESTA FUNCION */
function filterCharacters (expression) {
    let keycode = (expression.which) ? expression.which : expression.keycode; //se crea una variable que almacenara el codigo de cada tecla que se presione
    if (keycode == 8) { //si el codigo ese 8 (backspace o retroceder)
        return true; //se retorna true, osea, se escribe
    } else { //sino
        if (keycode >= 48 && keycode <= 57) {  //si el codigo es mayor o igual a 48 (0) y menor o igual a 57(9), se retorna true, osea, se escribe lo que se digito
            return true;
        } else { //si es cualquier otra cosa, osea, una letra, simbolo o etc, no se digita lo que se escribio
            return false;
        }
    }
}

//eventos
//top left
topLeft.addEventListener("keyup", () => {
    let numero = topLeft.value;
    numero = parseFloat(numero);
    if (typeof(numero) !== "number" || isNaN(numero)) {
        box.style.borderTopLeftRadius = "0px";
        topLeftProperty = `border-top-left-radius: 0px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    } else {
        toString(numero);
        box.style.borderTopLeftRadius = numero + "px";
        topLeftProperty = `border-top-left-radius: ${numero || 0}px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    }
});

//top right
topRight.addEventListener("keyup", () => {
    let numero = topRight.value;
    numero = parseFloat(numero);
    console.log(numero);
    console.log(typeof(numero));
    if (typeof(numero) !== "number" || isNaN(numero)) {
        box.style.borderTopRightRadius = "0px";
        topRightProperty = `border-top-right-radius: 0px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    } else {
        toString(numero);
        box.style.borderTopRightRadius = numero + "px"; 
        topRightProperty = `border-top-right-radius: ${numero || 0}px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    }
})

//bottom left
bottomLeft.addEventListener("keyup", () => {
    let numero = bottomLeft.value;
    numero = parseFloat(numero);
    console.log(numero);
    console.log(typeof(numero));
    if (typeof(numero) !== "number" || isNaN(numero)) {
        box.style.borderBottomLeftRadius = "0px";
        bottomLeftProperty = `border-bottom-left-radius: 0px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    } else {
        toString(numero);
        box.style.borderBottomLeftRadius = numero + "px";
        bottomLeftProperty = `border-bottom-left-radius: ${numero || 0}px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    }
})

//bottom right
bottomRight.addEventListener("keyup", () => {
    let numero = bottomRight.value;
    numero = parseFloat(numero);
    console.log(numero);
    console.log(typeof(numero));
    if (typeof(numero) !== "number" || isNaN(numero)) {
        box.style.borderBottomRightRadius = "0px";
        bottomRightProperty = `border-bottom-right-radius: 0px;`;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    } else {
        toString(numero);
        box.style.borderBottomRightRadius = numero + "px";
        bottomRightProperty = `border-bottom-right-radius: ${numero || 0}px;`;;
        writingBox.value = `${topLeftProperty}
${topRightProperty}
${bottomLeftProperty}
${bottomRightProperty}`;
    }
})

copyButton.addEventListener("click", () => {
    writingBox.select();
    document.execCommand("copy");
    alert(`Texto copiado! ${writingBox.value}`);
})
