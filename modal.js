export const Modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal h2'),
    buttonClose: document.querySelector('.close'),
    open() {
        this.wrapper.classList.add('open'); // Use "this" para se referir ao próprio objeto
    },
    close() {
        this.wrapper.classList.remove('open'); // Use "this" para se referir ao próprio objeto
    }
};


Modal.buttonClose.onclick = function () {
    Modal.close();
}

window.addEventListener('keydown', handleKeydown);

function handleKeydown (event){
    if(event.key == 'Escape'){
        Modal.close();
    }
}
 