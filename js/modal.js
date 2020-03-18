// ==== Плагин модалки ====

class Modal {
    constructor(object) {
        this.returnModal = createModal(object)

        this.listen = (event) => {
            if (event.target.dataset.button === 'close') {
                console.log(this)
            }
        }
    }

    open() {
        this.returnModal.classList.add('open');
        addEventListener('click', (event) => {
            if(event.target.dataset.button === 'close') {
                this.returnModal.classList.remove('open');
            }
        })
    }
    close() {
        this.returnModal.classList.remove('open');
    }

}



function createModal(obj) {
    const modal = document.createElement('div');
    const buttons = obj.footerButtons.map(function(item) {
        return `<button class="mui-btn mui-btn ${item.buttonClass}" data-button="${item.buttonData}">${item.buttonText}</button>`
    });
    modal.classList.add('modal');
    modal.classList.add('overlay');
    modal.setAttribute('data-button', 'close')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-window">
        <div class="modal-title">${obj.title}</div>
        <div class="modal-content">${obj.mainContent}</div>
    <div class="modal-button">
        ${buttons.join(' ')}
        </div>
        </div>
`);

    document.body.appendChild(modal)
    return modal;
}


// ==== ==== ====













