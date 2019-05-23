/* ##################### DOM EVENT HANDLERS ##################### */
const searchTodoInput = () => {
    document.getElementById('searchTodoInput').addEventListener('input', (e) => {
        filters.searchText = e.target.value.toLowerCase();
        if (filters.hideCompleted) {
            renderIncompleteTodo(todos, filters);
        } else {
            renderTodos(todos, filters);
        }
    });
};

const hideCompleted = () => {
    document.getElementById('hideCompleted').addEventListener('change', (e) => {
        if (e.target.checked) {
            filters.hideCompleted = true;
            renderIncompleteTodo(todos, filters);
        } else {
            filters.hideCompleted = false;
            renderTodos(todos, filters);
        }
    });
};

// Add New Todo Form:
const newTodoForm = () => {
    document.getElementById('newTodoForm').addEventListener('submit', (e) => {
        // Prevents Browser from reloading:
        e.preventDefault();
        // 1. Adds todo to list; 2. Alerts Success; 3. Clears form input:
        const newTodoBody = e.target.elements.newTodo.value;
        if (newTodoBody) {
            addTodo(newTodoBody);
            alertBtnMsg(newTodoBody);
            e.target.elements.newTodo.value = '';
        } else {
            console.warn('No Todo was provided, please type a todo before adding.');
            alert('No Todo was provided, please type a todo before adding.');
        }
    });
};

// Delete Button Click:
const clickDeleteButton = () => {
    const btn = document.querySelector('a#deleteBtn');
    btn.addEventListener('click', (e) => {
        console.log(e);
        const _id = e.target.value;
        deleteTodo(todos, _id);
    });
};

const clickCompleteCheckbox = () => {
    document.getElementById('completeCheckbox').addEventListener('change', (e) => {
        console.log(e);
    });
};


const sortTodos = () => {
    document.getElementById('sort').addEventListener('change', (e) => {
        filters.sortType = e.target.value;
        renderBySortType(todos, filters.sortType);
    });
};