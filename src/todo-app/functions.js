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
    const deletedButton = document.createElement('button');

    // Render todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // Render the todo body
    todoText.textContent = todo.body;
    todoEl.appendChild(todoText);

    // Render the Delete button
    deletedButton.innerHTML = '<i class="fa fa-trash-alt" title="Delete Todo"></i>';
    todoEl.appendChild(deletedButton);
    deletedButton.addEventListener('click', (e) => {
        deleteTodo(todo.id);
        renderTodos(todos, filters);
    });


    return todoEl;
};

// Get the DOM elements for list subtitle
const generateSummaryDOM = (incompleteTodos) => {
    const subtitle = document.createElement('p');
    subtitle.innerHTML = `<p class="subtitle">You have <u>${incompleteTodos.length}</u> todos left</p>`;
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
    const _id = uuidv4();
    const newTodo = {
        id: `${_id}`,
        body: todoBody,
        completed: false,
        createdAt: new Date()
    };
    todos.push(newTodo);
    saveTodosToLocalStorage(todos);
    alertBtnMsg(todoBody);
};

const deleteTodo = (id) => {
    const remainingTodos = todos.filter((todo) => {
        return todo.id !== id;
    });
    todos = remainingTodos;
    saveTodosToLocalStorage(todos);
    renderTodos(todos, filters);
};