
let tasks = [];
    

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";  
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${task} <button class="remove-btn" onclick="removeTask(${index})">Remover</button>`;
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const newTask = taskInput.value.trim(); 
  
  if (newTask) {
    tasks.push(newTask);  
    taskInput.value = ""; 
    renderTasks(); 
  } else {
    alert("Digite uma tarefa válida!");  
  }
}


function removeTask(index) {
  tasks.splice(index, 1); 
  renderTasks();  
}


function showMenu() {
  let userChoice;
  
  while (true) {
    
    userChoice = prompt("Escolha uma opção:\n1. Adicionar Tarefa\n2. Remover Tarefa\n3. Listar Tarefas\n4. Sair");
    
    switch (userChoice) {
      case "1":
        addTask();
        break;
      case "2":
        if (tasks.length > 0) {
          const taskIndex = prompt("Digite o índice da tarefa a ser removida: ");
          if (taskIndex >= 0 && taskIndex < tasks.length) {
            removeTask(taskIndex);
          } else {
            alert("Índice inválido!");
          }
        } else {
          alert("Não há tarefas para remover!");
        }
        break;
      case "3":
        renderTasks();
        break;
      case "4":
        alert("Saindo do gerenciador de tarefas.");
        return;  
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}