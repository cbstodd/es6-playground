// ####################### DATA ##########################
// Save todos to localStorage
const saveTodosToLocalStorage = (todos) => {
    if (todos) {
        localStorage.setItem('todos', JSON.stringify(todos));
    } else {
        return null;
    }
};

// FILTERS:
const getFilters = () => {
    return {
        searchText: '',
        hideCompleted: false,
        sortType: ''
    };
};

// CHECK FOR EXISTING TODOS:
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON !== null) {
        return JSON.parse(todosJSON);
    } else {
        return [];
    }
};

// ALERTS
const renderAlertMsg = (msg, ...redirectPath) => {
    const alert = document.getElementById('alertMsg');
    alert.setAttribute('class', 'alert alert-success');
    alert.innerHTML = `${msg}`;
    setTimeout(() => {
        alert.setAttribute('class', '');
        alert.innerHTML = '';
    }, 1500);
    if (redirectPath) {
        console.log('redirecting');
        console.log(redirectPath);
        setTimeout(() => location.assign(`${redirectPath}`), 1550);
    }
};