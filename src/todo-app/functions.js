/* ##################### FUNCTIONS ##################### */

// Render application todos based on filters
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.body.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch;
    });

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector('#todos').innerHTML = '';
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));

    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    });
};

// Get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // Setup todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Setup the todo body
    todoText.textContent = todo.body;
    todoEl.appendChild(todoText);

    // Setup the remove button
    removeButton.innerHTML = '<i class="fa fa-trash-alt"></i>';
    todoEl.appendChild(removeButton);

    return todoEl;
};

// Get the DOM elements for list subtitle
const generateSummaryDOM = (incompleteTodos) => {
    const subtitle = document.createElement('p');
    subtitle.innerHTML = `<p class="subtitle">You have ${incompleteTodos.length} todos left</p>`;
    return subtitle;
};

const alertBtnMsg = (_newTodoBody) => {
    // Updates text on button (alert):
    const newTodoBtn = document.getElementById('addTodoBtn');
    newTodoBtn.textContent = `"${_newTodoBody}" was added!!!`;
    setTimeout(() => {
        newTodoBtn.innerHTML = `<i class="fa fa-plus"></i> Add Todo`;
    }, 2000);
};


const addTodo = (todoBody) => {
    const randNum = Math.floor((Math.random() * 1999999) + 1);
    const newTodo = {
        id: `${randNum}`,
        body: todoBody,
        completed: false,
        createdAt: new Date()
    };
    todos.push(newTodo);
    saveTodosToLocalStorage(todos);
    alertBtnMsg(todoBody);
};