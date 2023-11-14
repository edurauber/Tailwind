function showModal() {
let modal = documento.queryselector('#modal')
modal.classList.add('modal-active')

}

function closeModal() {
    let modal = documento.queryselector('#modal')
    modal.classList.remove('modal-active')
    
    }

let openModal = documento.querySelector('#open-modal');
openModal.AddEventListener('click', showModal);