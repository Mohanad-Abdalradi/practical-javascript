  
  //Functions
function sayHiTo(person) {
    console.log('hi', person);
}

sayHiTo('mohanad') // hi mohanad

//display todos
var todos = ['item 1', 'item 2', 'item 3']
function displayTodos() {
    console.log('My todos:', todos);
}
 
//add new todos
function addTodo() {
    todos.push('new todo');
    displayTodos();
}

//change todo
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(0, 'changed')
changeTodo(0, 'changed again')

// delete todo
function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}
deleteTodo(0)

