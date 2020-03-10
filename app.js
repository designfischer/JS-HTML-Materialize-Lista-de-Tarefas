// Define variáveis da inteface
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Define a função para carregar todos os eventListeners
function loadEventListeners() {   
    // Evento de Adicionar Tarefa
    form.addEventListener("submit", addTask);    
}
// Define a função de adicionar tarefa
function addTask(e) {    
    if (taskInput.value === '') {
        alert('Adicione uma tarefa');
    }   
    
    // Cria um elemento li
    const li = document.createElement('li');
    // Adiciona uma classe para o elemento
    li.className = 'collection-item';
    // Cria o textnode e o adiciona ao item li criado
    li.appendChild(document.createTextNode(taskInput.value));
    
    // Cria o link para deletar
    const link = document.createElement('a');
    // Adiciona uma classe para o elemento
    link.className = 'delete-item secondary-content';
    // Adiciona o ícone de deletar
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Adiciona o link de deletar ao item li criado
    li.appendChild(link);

    // Adiciona a tarefa ao element ul
    taskList.appendChild(li);

    // Limpar o campo de input
    taskInput.value = '';

    e.preventDefault();      
}

// Chama a função para carregar todos os eventListeners
loadEventListeners();