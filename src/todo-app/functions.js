/* ##################### FUNCTIONS ##################### */

// GETS THE AMOUNT OF INCOMPLETE TODOS:
function renderNumOfIncompleteTodos() {
    const incompleteTodos = todos.filter((todo) => {
        return !todo.completed;
    });

    document.getElementById('incompleteTodos').innerHTML = '';
    // PRINTS THE NUMBER OF INCOMPLETE TODOS ON THE PAGE:
    const numOfIncompTodos = document.createElement('span');

    numOfIncompTodos.innerHTML = incompleteTodos.length;
    document.getElementById('incompleteTodos').appendChild(numOfIncompTodos);
}


const deleteTodo = (todos, id) => {
    const remainingTodos = todos.filter((todo) => {
        return todo.id !== id;
    });
    todos = remainingTodos;
    addTodosToLocalStorage(todos);
    renderTodos(todos, filters);
};


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
            todoItem.innerHTML = `<input type="checkbox" id="completeCheckbox" value="${todo.id}">&nbsp;${todo.body}&nbsp;<a value="${todo.id}" id="deleteBtn" class="delete"><i class="fa fa-trash"></i> Delete</a>`;
        } else {
            todoItem.innerHTML = `<s class="completed"><input type="checkbox" id="completeCheckbox" value="${todo.id}">{todo.body}</s>&nbsp;<a value="${todo.id}" id="deleteBtn" class="delete"><i class="fa fa-trash"></i> Delete</a>`;
        }
        document.querySelector('#todos').appendChild(todoItem);
    });
};
renderTodos(todos, filters);


// RENDERS ALL INCOMPLETE TODOS:
const renderIncompleteTodo = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch = todo.body.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideIncompleteTodos = !todo.completed;
        return searchTextMatch && hideIncompleteTodos;
    });

    document.getElementById('todos').innerHTML = '';
    filteredTodos.map((todo) => {
        const todoItem = document.createElement('p');
        todoItem.innerHTML = `<i class="fal fa-square"></i> ${todo.body}`;
        document.querySelector('#todos').appendChild(todoItem);
    });
};

// RENDERS TODOS ACCORDING TO SORT TYPE:
// const renderBySortType = (todos, sortType) => {
//     const lastEdited = todos.map((todo) => {
//         if (sortType === 'lastEdited') {

//         }
//     });
//     console.table(lastEdited);

// };

const addTodo = (todoBody) => {
    const randNum = Math.floor((Math.random() * 1999999) + 1);
    const newTodo = {
        id: `${randNum}`,
        body: todoBody,
        completed: false,
        createdAt: new Date()
    };
    todos.push(newTodo);
    addTodosToLocalStorage(todos);
    renderNumOfIncompleteTodos();
    if (filters.hideCompleted) {
        renderIncompleteTodo(todos, filters);
    } else {
        renderTodos(todos, filters);
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