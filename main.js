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

// Funktion för att skapa / styla / visa upp todos
function createTodoItem(todo, index) { 
  let todoItem = document.createElement("li"); 
  if (todo.completed) { 
    todoItem.classList.add("completed"); 
  } 

  let completedBtn = document.createElement("input"); 
  completedBtn.type = "checkbox"; 
  completedBtn.checked = todo.completed; 
  completedBtn.onchange = () => completedTodos(index); 

  let titleInput = document.createElement("span"); 
  titleInput.textContent = todo.title; 
  titleInput.style = "font-weight: bold; margin-right: 15px; margin-left: 15px; font-size: 20px;"; 

  let descriptionInput = document.createElement("span"); 
  descriptionInput.textContent = todo.description; 
  descriptionInput.style = "font-size: 16px; margin-right: 30px;" 

  let createdDateStamp = document.createElement("span"); 
  createdDateStamp.textContent = `Created: ${todo.createdDate.toLocaleString()}`; 
  createdDateStamp.style = "font-style: italic; color: gray; margin-right: 15px;" 

  let completedDateStamp = document.createElement("span"); 
  completedDateStamp.style = "font-style: italic; color: gray;" 
  
  if(todo.completed) { 
  completedDateStamp.textContent = `Completed: ${todo.completedDate.toLocaleString()}`; 
  } 

  let removeBtn = document.createElement("button"); 
  removeBtn.textContent = "Remove"; 
  removeBtn.onclick = () => removeTodo(index); 

  todoItem.appendChild(completedBtn); 
  todoItem.appendChild(titleInput); 
  todoItem.appendChild(descriptionInput); 
  todoItem.appendChild(createdDateStamp); 
  todoItem.appendChild(completedDateStamp); 
  todoItem.appendChild(removeBtn); 

  return todoItem; 
} 

// Funktion för att rensa inmatningsfälten
function clearInputs() { 
  inputTitle.value = ""; 
  inputDescription.value = ""; 
} 