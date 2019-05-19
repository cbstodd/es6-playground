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

let newTodoBody = '';

// GETS THE AMOUNT OF INCOMPLETE TODOS:
const incompleteTodos = todoList.filter((todo) => {
    return !todo.completed;
});
// PRINTS THE NUMBER OF INCOMPLETE TODOS ON THE PAGE:
const numOfIncompTodos = document.createElement('span');
numOfIncompTodos.textContent = incompleteTodos.length;
document.querySelector('.incomp-todos').appendChild(numOfIncompTodos);

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

// Click event that changes text on button when clicked:
document.getElementById('addTodoBtn').addEventListener('click', (e) => {
    e.target.textContent = `${newTodoBody} was added!`;
    setTimeout(() => {
        e.target.innerHTML = `<i class="fa fa-plus"></i> Add Todo`;
    }, 2000);


    addTodo(newTodoBody);
});

// Adds click event to remove all todos in unordered list:
document.getElementById('clearTodos').addEventListener('click', (e) => {
    document.querySelectorAll('#todos').forEach((todo) => {
        todo.remove();
    });
});

document.getElementById('searchTodoInput').addEventListener('input', (e) => {
    filters.searchText = e.target.value.toLowerCase();
    renderTodos(todoList, filters);
});

document.getElementById('addTodoInput').addEventListener('input', (e) => {
    newTodoBody = e.target.value;
});

const addTodo = (todoBody) => {
    const randNum = Math.floor((Math.random() * 1999999) + 1);
    newTodo = {
        id: `${randNum}`,
        body: todoBody,
        completed: false
    };
    todoList.push(newTodo);
    console.table(todoList);
    renderTodos(todoList, filters);
};