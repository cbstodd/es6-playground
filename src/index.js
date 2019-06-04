/* ##################### INDEX (CALLS) ##################### */
let todos = getSavedTodos();
const filters = getFilters();

renderTodos(todos, filters);

document.getElementById('searchTodoInput').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
});

document.getElementById('newTodoForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // 1. Adds todo to list; 2. Alerts Success; 3. Clears form input:
    const newTodoBody = e.target.elements.newTodo.value;
    if (newTodoBody) {
        addTodo(newTodoBody);
    } else {
        console.warn('No Todo was provided, please type a todo before adding.');
        alert('No Todo was provided, please type a todo before adding.');
    }
    // addTodo(todos);
    renderTodos(todos, filters);
    e.target.elements.newTodo.value = '';
});

document.getElementById('hideCompleted').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});


document.getElementById('sort').addEventListener('change', (e) => {
    const value = e.target.value;

    if (value === 'lastEdited') {
        const todosByUpdatedAt = _.orderBy(todos, 'updatedAt', 'desc');
        renderTodos(todosByUpdatedAt, filters);
    } else if (value === 'recentlyCreated') {
        const todosByCreatedAt = _.orderBy(todos, 'createdAt', 'desc');
        renderTodos(todosByCreatedAt, filters);
    } else if (value === 'oldestCreated') {
        const todosByOldestCreatedAt = _.orderBy(todos, 'createdAt', 'asc');
        renderTodos(todosByOldestCreatedAt, filters);
    } else if (value === 'alphabeticalZA') {
        const todosByAlphabeticalZA = _.orderBy(todos, 'body', 'desc');
        renderTodos(todosByAlphabeticalZA, filters);
    } else if (value === 'alphabetical') {
        const todosByAlphabetical = _.orderBy(todos, 'body', 'asc');
        renderTodos(todosByAlphabetical, filters);
    } else {
        renderTodos(todos, filters);
    }
});