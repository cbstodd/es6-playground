const todos = [{
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
        completed: true
    },
];
const paragraphs = document.querySelectorAll('p');

// Do something with each paragraph tag
paragraphs.forEach((p) => {
    // Remove paragraphs that contain the word 'paragraph'.
    // if (p.textContent.includes('paragraph')) {
    //     p.remove();
    // }

    // Adds content of to each paragraph '***********'.
    // p.textContent = '************';
})

const incompleteTodos = todos.filter((todo) => {
    return !todo.completed;
});

const summary = document.createElement('span');
summary.textContent = incompleteTodos.length;
document.querySelector('.incomp-todos').appendChild(summary);

todos.forEach((todo) => {
    if (!todo.completed) {
        const listItem = document.createElement('li');
        listItem.textContent = todo.text;
        document.querySelector('ul.todos').appendChild(listItem);
    }
})

// Add content to page:
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a newly created element from JavaScript';
// document.querySelector('.container').appendChild(newParagraph);