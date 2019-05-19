let myTodos = [{
        id: '1',
        text: 'First todo',
        completed: false
    },
    {
        id: '2',
        text: 'Second todo',
        completed: false
    },
    {
        id: '3',
        text: 'Third todo',
        completed: false
    },
    {
        id: '4',
        text: 'Fourth todo',
        completed: false
    },
    {
        id: '5',
        text: 'Fifth todo',
        completed: false
    },
];

const filters = {
    searchText: ''
};



// Renders todos to page:
const renderTodos = (_myTodos, filters) => {
    const incompleteTodos = myTodos.filter((todo) => {
        return !todo.completed;
    });

    _myTodos.forEach((todo) => {
        if (!todo.completed) {
            const listItem = document.createElement('li');
            listItem.textContent = todo.text;
            document.querySelector('ul.todos').appendChild(listItem);
        }
    });
};

renderTodos(myTodos, filters);

// Click event that changes text on button when clicked:
document.getElementById('addTodoBtn').addEventListener('click', (e) => {
    e.target.textContent = 'Todo was Added!';
});

// Adds click event to remove all todos in unordered list:
document.getElementById('clearTodos').addEventListener('click', (e) => {
    document.querySelectorAll('ul.todos').forEach((todo) => {
        todo.remove();
    });
});

document.getElementById('searchTodoInput').addEventListener('input', (e) => {
    console.log(e.target.value);
});

document.getElementById('addTodoInput').addEventListener('keydown', (e) => {
    console.log(e.target.value);
});