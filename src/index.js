/* ##################### INDEX (CALLS) ##################### */
const todos = getSavedTodos();
const filters = getFilters();
searchTodoInput();
hideCompleted();
newTodoForm();
sortTodos();
renderNumOfIncompleteTodos();
renderTodos(todos, filters);
clickDeleteButton();
clickCompleteCheckbox();