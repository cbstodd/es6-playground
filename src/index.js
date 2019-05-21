let todoList = [{
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Make Coffee',
        completed: true
    },
    {
        id: `${Math.floor((Math.random() * 1999999) + 1)}`,
        body: 'Uncover porch cushions',
        completed: true
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
    searchText: '',
    hideCompleted: false
};


// GETS THE AMOUNT OF INCOMPLETE TODOS:
function renderNumOfIncompleteTodos() {
    const incompleteTodos = todoList.filter((todo) => {
        return !todo.completed;
    });

    document.getElementById('incompleteTodos').innerHTML = '';
    // PRINTS THE NUMBER OF INCOMPLETE TODOS ON THE PAGE:
    const numOfIncompTodos = document.createElement('span');

    numOfIncompTodos.innerHTML = incompleteTodos.length;
    document.getElementById('incompleteTodos').appendChild(numOfIncompTodos);
}
renderNumOfIncompleteTodos();

// RENDERS ALL TODOS TO PAGE:
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        return todo.body.toLowerCase().includes(
            filters.searchText.toLowerCase()
        );
    });

    document.getElementById('todos').innerHTML = '';

    filteredTodos.map((todo) => {
        const todoItem = document.createElement('p');
        if (!todo.completed) {
            todoItem.innerHTML = `<i class="fal fa-square"></i> ${todo.body}`;
        } else {
            todoItem.innerHTML = `<s class="completed"><i class="fal fa-square"></i> ${todo.body}</s>`;
        }
        document.querySelector('#todos').appendChild(todoItem);
    });
};
renderTodos(todoList, filters);

// RENDERS ALL INCOMPLETE TODOS:
const renderIncompleteTodo = (todos, filters) => {
    const filteredTodos = todos
        .filter((todo) => {
            return todo.body.toLowerCase().includes(filters.searchText.toLowerCase()) && !todo.completed;
        });

    document.getElementById('todos').innerHTML = '';
    filteredTodos.map((todo) => {
        const todoItem = document.createElement('p');
        todoItem.innerHTML = `<i class="fal fa-square"></i> ${todo.body}`;
        document.querySelector('#todos').appendChild(todoItem);
    });
};

const addTodo = (todoBody) => {
    const randNum = Math.floor((Math.random() * 1999999) + 1);
    const newTodo = {
        id: `${randNum}`,
        body: todoBody,
        completed: false
    };
    todoList.push(newTodo);
    console.table(todoList);
    renderNumOfIncompleteTodos();
    if (filters.hideCompleted) {
        renderIncompleteTodo(todoList, filters);
    } else {
        renderTodos(todoList, filters);
    }

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
    if (filters.hideCompleted) {
        renderIncompleteTodo(todoList, filters);
    } else {
        renderTodos(todoList, filters);
    }
});

document.getElementById('hideCompleted').addEventListener('change', (e) => {
    if (e.target.checked) {
        filters.hideCompleted = true;
        renderIncompleteTodo(todoList, filters);
    } else {
        filters.hideCompleted = false;
        renderTodos(todoList, filters);
    }
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