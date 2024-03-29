
 // display todos method
  var todoList = {
  todos: [],
     displayTodos: function () {
     console.log('My Todos', this.todos);
    },

    addTodo: function(todoText) {
      this.todos.push({
      todoText: todoText,
      completed: false
      });
      this.displayTodos();
    },

  //change todo
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },

  //delete todo
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },

  toggleCompleted: function(position) {
      var todo = this.todos[position];
      todo.completed = !todo.completed;
      this.displayTodos();
  }
 };

