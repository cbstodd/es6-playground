let todoList = [{
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Make Coffee',
        completed: false
    },
    {
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Uncover porch cushions',
        completed: false
    },
    {
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Go for a walk at Quiet Waters',
        completed: false
    },
    {
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Study Web Flutter',
        completed: false
    },
    {
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Fill out ngConf expense report',
        completed: false
    },
];

const filters = {
    searchText: ''
};


// GETS THE AMOUNT OF INCOMPLETE TODOS:
const renderIncompleteTodos = () => {
    const incompleteTodos = todoList.filter((todo) => {
        return !todo.completed;
    });

    document.getElementById('incompleteTodos').innerHTML = '';
    // PRINTS THE NUMBER OF INCOMPLETE TODOS ON THE PAGE:
    const numOfIncompTodos = document.createElement('span');

    numOfIncompTodos.innerHTML = incompleteTodos.length;
    document.getElementById('incompleteTodos').appendChild(numOfIncompTodos);
};
renderIncompleteTodos();

// Renders todos to page:
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.body.toLowerCase().includes(
            filters.searchText.toLowerCase()
        );
    });

    document.getElementById('todos').innerHTML = '';

    filteredTodos.forEach((todo) => {
        if (!todo.completed) {
            const todoItem = document.createElement('p');
            todoItem.innerHTML = `<i class="fal fa-square"></i> ${todo.body}`;
            document.querySelector('#todos').appendChild(todoItem);
        }
    });
};
renderTodos(todoList, filters);

const addTodo = (todoBody) => {
    const randNum = Math.floor((Math.random() * 1999999) + 1);
    const newTodo = {
        id: `${randNum}`,
        body: todoBody,
        completed: false
    };
    todoList.push(newTodo);
    console.table(todoList);
    renderIncompleteTodos();
    renderTodos(todoList, filters);
};

const alertBtnMsg = (_newTodoBody) => {
    // Updates text on button (alert):
    const newTodoBtn = document.getElementById('addTodoBtn');
    newTodoBtn.textContent = `"${_newTodoBody}" was added!!!`;
    setTimeout(() => {
        newTodoBtn.innerHTML = `<i class="fa fa-plus"></i> Add Todo`;
    }, 2000);
};


// ####################### DOM EVENT HANDLERS ######################
document.getElementById('searchTodoInput').addEventListener('input', (e) => {
    filters.searchText = e.target.value.toLowerCase();
    renderTodos(todoList, filters);
});

// Add New Todo Form:
document.getElementById('newTodoForm').addEventListener('submit', (e) => {
    // Prevents Browser from reloading:
    e.preventDefault();
    // 1. Adds todo to list; 2. Alerts Success; 3. Clears form input:
    const newTodoBody = e.target.elements.newTodo.value;
    addTodo(newTodoBody);
    alertBtnMsg(newTodoBody);
    e.target.elements.newTodo.value = '';
});