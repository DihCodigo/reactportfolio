
function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    //console.log(textoArray)
    textoArray.forEach((letra, i) => {
        setTimeout( () => elemento.innerHTML += letra, 180 * i)
    }); 
}

const titulo = document.querySelector('h1');
//console.log(titulo)
typeWrite(titulo)