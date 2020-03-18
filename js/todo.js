class Todo {
    constructor() {
        this.newListTodo = createListTodo
    }
    addItem(title) {
        createListTodo(title)
    }
    deleteItem() {

    }
}

const arrayTodoList = []

function createListTodo(title) {
    arrayTodoList.push(`
       <div class="todo-list" data-id="${arrayTodoList.length}">
            <p>${title}</p>
                <ul class="todoList">
                    
                </ul>
            <div class="todo-item" data-button="add-item" data-id="${arrayTodoList.length}">Добавить задачу</div>
        </div>
    `)

        document.querySelector('.todo-container').insertAdjacentHTML('beforeend', `${arrayTodoList[arrayTodoList.length - 1]}`)
}

function createItemTodo(id) {
    document.querySelector(`.todo-list[data-id="${id}"]`).insertAdjacentHTML('beforeend', `
       <div class="new-item-add">
        <input class="input-item-add" type="text"><br>
        <button class="mui-btn mui-btn--primary" data-btn="save-item" data-id="${id}">Сохранить</button>
        </div>
`)
}

function addItemTodo(id) {
    const value = document.querySelector(`.input-item-add`).value;

    document.querySelector(`.todo-list[data-id="${id}"] .todoList`).insertAdjacentHTML('afterbegin', `
       <div class="todo-item">${value}</div>
`)

    document.querySelector('.new-item-add').remove();
}
