class todo {
    constructor() {
        this.focusTodo();
        this.initTodos();
        this.initEventListeners();
    }

    focusTodo = () => {
        document.querySelector('#containerEx9>form').reset();
        document.getElementById('todo').focus();
    }

    initTodos = () => {
        const todos = JSON.parse(localStorage.getItem('todos'));
        if (todos) {
            let listTodo = document.getElementById('listTodo');
            for (const todo of todos) {
                this.addTask(todo.description, todo.completed);
            }
        }
    }

    initEventListeners = () => {
        document.querySelector('#containerEx9 > form').addEventListener('submit', this.handlerAddTodo);
        document.getElementById('resetTasks').addEventListener('click', this.resetTasks);
    }

    setLocalStorage = () => {
        const listTodo = document.querySelectorAll('#listTodo>li');
        let objListTodo = [];
        for (const task of listTodo) {
            let taskObjt = {};
            taskObjt.description = task.querySelector('p').textContent;
            taskObjt.completed = task.querySelector('input[type=checkbox]').checked;
            objListTodo.push(taskObjt);
        }

        localStorage.setItem('todos', JSON.stringify(objListTodo));
    }

    handlerAddTodo = (event) => {
        event.preventDefault();
        const descriptionTodo = document.getElementById('todo').value;
        this.addTask(descriptionTodo);
        this.focusTodo();
        this.setLocalStorage();
    }

    handlerResetTodo = (event) => {
        this.resetTasks();
    }

    addTask = (description = '', completed = false) => {
        const list = document.getElementById('listTodo');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = completed;
        checkbox.addEventListener('change', this.setLocalStorage);
        const label = document.createElement('label');
        label.appendChild(checkbox);
        checkbox.insertAdjacentHTML("afterend", "<span>Tarea finalizada</span>");
        const li = document.createElement('li');
        li.innerHTML = `<p>${description}</p>`;
        li.appendChild(label);
        list.appendChild(li);
    }

    resetTasks = () => {
        localStorage.removeItem('todos');
        document.getElementById('listTodo').innerText = '';
        this.focusTodo();
    }
}

export const initExercise = () => {
    const myTodo = new todo();
}