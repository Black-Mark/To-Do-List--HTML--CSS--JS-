document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    // Load existing todos from local storage
    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    // Render todos
    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.textContent = todo;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('delete-btn');
            deleteBtn.addEventListener('click', () => {
                todos.splice(index, 1);
                localStorage.setItem('todos', JSON.stringify(todos));
                renderTodos();
            });
            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    };

    renderTodos();

    // Add new todo
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTodo = todoInput.value.trim();
        if (newTodo !== '') {
            todos.push(newTodo);
            localStorage.setItem('todos', JSON.stringify(todos));
            renderTodos();
            todoInput.value = '';
        }
    });
});
