const todo = new Todo()

const modal = new Modal({
    title: 'Здравствуйте',
    mainContent: `
    <p>Создать ToDo?</p>
    <input id="title-todo" placeholder="Введите заголовок">`,
    footerButtons: [
        {
            buttonText: 'Принять',
            buttonData: 'createToDo',
            buttonClass: 'mui-btn--primary'
        },
        {
            buttonText: 'Закрыть',
            buttonData: 'close',
            buttonClass: 'mui-btn--danger'
        },
    ],
});

addEventListener('click', function(event) {
    if(event.target.dataset.button === 'open') {
        modal.open();
    }
    if(event.target.dataset.button === 'createToDo') {
        let titleForToDo = document.querySelector('#title-todo').value
        todo.addItem(titleForToDo)
        modal.close();
        document.querySelector('.startToDo').innerHTML = 'Добавить список'
    }
    if(event.target.dataset.button === 'add-item') {
        createItemTodo(event.target.dataset.id);
    }
    if(event.target.dataset.btn === 'save-item') {
        addItemTodo(event.target.dataset.id);
    }
});