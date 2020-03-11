// Define variáveis da inteface
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Chama a função para carregar todos os eventListeners
loadEventListeners();

// Define a função para carregar todos os eventListeners
function loadEventListeners() {   
    // Evento de Adicionar Tarefa
    form.addEventListener("submit", addTask); 
    // Evento de Remover Tarefa
    taskList.addEventListener('click', removeTask);
    // Evento de Limpar Lista de Tarefas
    clearBtn.addEventListener('click', clearTasks);
    // Evento de filtrar as Tarefas
    filter.addEventListener('keyup', filterTasks);
}
// Define a função de adicionar tarefa
function addTask(e) { 
    // Verifica se o input está vazio, alertando o usuário para preenchê-lo   
    if (taskInput.value === '') {
        alert('Adicione uma tarefa');
    } else {       
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
    }

    // Evita com que a Tarefa Adicionada desapaeça
    e.preventDefault();      
}

// Função de remover tarefa ao clicar no X
function removeTask(e) {
    // Colocar como alvo da seleção o X
    if (e.target.parentElement.classList.contains('delete-item')) {
        if (confirm('Você tem certeza que deseja remover a tarefa?')) {
            e.target.parentElement.parentElement.remove();
        }        
    }
}

// Função de Limpar tarefas
function clearTasks() {
    // Forma fácil: substituir o innerHTML por ''
    // taskList.innerHTML = '';
    // Forma mais complicada (e rápida): loop
    while(taskList.firstChild) { // Enquanto existe algo no topo do loop
        taskList.removeChild(taskList.firstChild); // Remove esse algo no topo do loop
    }
}

// Função de Filtrar as Tarefas
function filterTasks(e) {
    const text = e.target.value.toLowerCase(); // Pega o valor digitado no campo de filtrar

    document.querySelectorAll('.collection-item').forEach // QuerySelector retorna NodeList
    ( 
        function(task){
            const item = task.firstChild.textContent;
            if (item.toLowerCase().indexOf(text) != -1) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        } 
    );     
}