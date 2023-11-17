import {Modal} from './modal.js';



export function notANumber(value){
    return isNaN(value) || value == ""
}

export function calculateIMC(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters ** 2)).toFixed(2);
}

export function displayResultMenssage(result){
    function toggleManssage(x) {
        Modal.message.innerText = x;
    }
    Modal.open();

    if (result < 18.5) {
        toggleManssage(`Seu imc é ${imc} e é considerado Baixo Peso`)
      }
    else if (result >= 18.5 && result < 24.9) {
        toggleManssage(`Seu imc é ${result} e é considerado Peso Normal`)
      }
    else if (result >= 25 && result < 29.9) {
        toggleManssage(`Seu imc é ${result} e é considerado Sobrepeso`)
      }
    else if (result >= 30 && result < 34.9) {
        toggleManssage(`Seu imc é ${result} e é considerado Obesidade(Grau I)`)
      }
    else if (result >= 35 && result < 39.9) {
        toggleManssage(`Seu imc é ${result} e é considerado Obesidade Severa(Grau II)`)
      }
    else if (result >= 40) {
        toggleManssage(`Seu imc é ${result} e é considerado Obesidade Mórbita(Grau III)`)
      }
}