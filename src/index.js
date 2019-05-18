let myTodos = [{
        text: 'First todo',
        completed: false
    },
    {
        text: 'Second todo',
        completed: false
    },
    {
        text: 'Third todo',
        completed: false
    },
    {
        text: 'Fourth todo',
        completed: false
    },
    {
        text: 'Fifth todo',
        completed: false
    },
];

const newTodo = {
    text: 'New Todo',
    completed: false
};

// CREATE NEW TODOS:
document.querySelector('#search-text').addEventListener('change');


// DISPLAY TODOS ON SCREEN:
myTodos.forEach((todo) => {
    if (!todo.completed) {
        const listItem = document.createElement('li');
        listItem.textContent = todo.text;
        document.querySelector('ul.todos').appendChild(listItem);
        console.log('Incomplete Todo: ', todo);
    }
});

const printTodos = (todo) => {
    // Appends todos to a list
    if (!todo.completed) {
        const listItem = document.createElement('li');
        listItem.textContent = todo.text;
        document.querySelector('ul.todos').appendChild(listItem);
    }
};


// Adds new
const createBtn = document.getElementById('addTodo');
createBtn.addEventListener('click', (event) => {
    // Replaces default button text:
    // event.target.textContent = `Todo added`;
    // Pushes new todo onto todos lis:
    myTodos.push(newTodo);
    console.log('Incomplete Todo: ', newTodo);
    // const listItem = document.createElement('li');
    // listItem.textContent = newTodo.text;
    // document.querySelector('ul.todos').appendChild(listItem);
    printTodos(newTodo);
});


const addBtn = document.getElementById('clearTodos');
addBtn.addEventListener('click', (event) => {
    myTodos = [];
    console.log('this.todos', myTodos);

    // Removes all children of "ul":
    const e = document.querySelector("ul");
    //e.firstElementChild can be used.
    let child = e.lastElementChild;
    while (child) {
        e.removeChild(child);
        child = e.lastElementChild;
    }
});


// GETS THE AMOUNT OF INCOMPLETE TODOS:
const incompleteTodos = myTodos.filter((todo) => {
    return !todo.completed;
});
// PRINTS THE NUMBER OF INCOMPLETE TODOS ON THE PAGE:
const summary = document.createElement('span');
summary.textContent = incompleteTodos.length;
document.querySelector('.incomp-todos').appendChild(summary);