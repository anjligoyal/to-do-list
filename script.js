// script.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Add new task
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    // Handle task actions (complete, edit, delete)
    taskList.addEventListener('click', function(event) {
        const target = event.target;
        const taskElement = target.closest('li');
        if (target.classList.contains('complete')) {
            toggleCompleteTask(taskElement);
        } else if (target.classList.contains('edit')) {
            editTask(taskElement);
        } else if (target.classList.contains('delete')) {
            deleteTask(taskElement);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
                <button class="complete">✓</button>
                <button class="edit">✎</button>
                <button class="delete">✗</button>
            </div>
        `;
        taskList.appendChild(li);
    }

    function toggleCompleteTask(taskElement) {
        taskElement.classList.toggle('completed');
    }

    function editTask(taskElement) {
        const taskTextElement = taskElement.querySelector('.task-text');
        const newTaskText = prompt('Edit task:', taskTextElement.textContent);
        if (newTaskText !== null) {
            taskTextElement.textContent = newTaskText.trim();
        }
    }

    function deleteTask(taskElement) {
        taskList.removeChild(taskElement);
    }
});
