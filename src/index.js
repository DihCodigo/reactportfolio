import  ReactDOM from 'react-dom'
import App from './App';
import './index.css'

ReactDOM.render(<App/>, document.querySelector('#root'));

function typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');

    elemento.innerHTML = '';
    //console.log(textoArray)
    textoArray.forEach((letra, i) => {
        setTimeout( () => elemento.innerHTML += letra, 115 * i)
    }); 
}

const titulo = document.querySelector('h1');
//console.log(titulo)
typeWrite(titulo)