document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    // Adicionar nova tarefa
    addTaskBtn.addEventListener('click', addTask);

    // Marcar tarefa como concluída ou excluir
    taskList.addEventListener('click', handleTaskAction);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            if (taskText.length <= 24) {
                const li = document.createElement('li');
                li.className = 'task-item';
                li.innerHTML = `
                    <span>${taskText}</span>
                    <button class="delete-btn">Excluir</button>
                `;
                taskList.appendChild(li);
                taskInput.value = '';
            } else {
                alert('A tarefa não pode ter mais de 24 caracteres.');
            }
        }
    }

    function handleTaskAction(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'SPAN') {
            e.target.classList.toggle('completed');
        }
    }
});
