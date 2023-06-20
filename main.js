// Hämtar element från HTML och skapar en array för alla Todos
let todoContainer = document.getElementById("todo-list"); 
let inputTitle = document.getElementById("title-input"); 
let inputDescription = document.getElementById("description-input"); 
let allTodos = []; 

// Funktion för att lägga till nya todos i arrayen
function addTodo() { 
  let title = inputTitle.value; 
  let description = inputDescription.value; 
  let createdDate = new Date(); 
  let todo = { title, description, completed: false, createdDate }; 

  allTodos.push(todo); 

  renderTodos(); 
  clearInputs(); 
} 

// Funktion som tar bort specifika todos från arrayen
function removeTodo(index) { 
  allTodos.splice(index, 1); 
  renderTodos(); 
} 

// Funtion för att lägga till datum och tid vid avklarade todos
function completedTodos(index) { 
  let todo = allTodos[index]; 
  let { completed } = todo; 
    if (completed) { 
      todo.completed = false; 
      todo.completedDate = ""; 
    } else { 
      todo.completed = true; 
      todo.completedDate = new Date(); 
    } 
  renderTodos(); 
} 

// Funktion som rensar todoContainer elementet och lägger till HTML element för varje todo
function renderTodos() { 
  todoContainer.innerHTML = ""; 

  allTodos.forEach((todo, index) => { 
    let todoItem = createTodoItem(todo, index); 
    todoContainer.appendChild(todoItem) 
  }) 
} 