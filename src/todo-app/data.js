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




// export function data() {
//     return [{
//             id: `${Math.floor((Math.random() * 1999999) + 1)}`,
//             body: 'Make Coffee',
//             completed: true
//         },
//         {
//             id: `${Math.floor((Math.random() * 1999999) + 1)}`,
//             body: 'Uncover porch cushions',
//             completed: true
//         },
//         {
//             id: `${Math.floor((Math.random() * 1999999) + 1)}`,
//             body: 'Go for a walk at Quiet Waters',
//             completed: false
//         },
//         {
//             id: `${Math.floor((Math.random() * 1999999) + 1)}`,
//             body: 'Study Web Flutter',
//             completed: false
//         },
//         {
//             id: `${Math.floor((Math.random() * 1999999) + 1)}`,
//             body: 'Fill out ngConf expense report',
//             completed: false
//         },
//     ];
// }