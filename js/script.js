import { AlertError } from './alert-error.js';
import {calculateIMC, notANumber, displayResultMenssage} from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight');
const inputHeight = document.querySelector('#height');

form.addEventListener('submit', function (event) {
    event.preventDefault();
  
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const weightOrHeightNotANumber = notANumber(weight) || notANumber(height)
    
    if( weightOrHeightNotANumber){
        AlertError.open()
        return
    }
    
    AlertError.close()
    
    const result = calculateIMC(weight, height);
    displayResultMenssage(result)
});

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()
