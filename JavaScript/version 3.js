
// Object
var myComputer = {
    operatingSystem: "mac",
    screenSize: "15 inches",
    purchaseYear: 2011
  }

  var mohanad = {
    name: 'Mohanad',
    sayName: function() {
      console.log(this.name);
    }  
  }
  // todos array on an object
    var todoList = {
      todos: ['item 1', 'item 2', 'item 3']
   }
     console.log(todoList);

   
   // display todos method
    var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
   _displayTodos: function () {
        console.log('My Todos', this.todos);
      }
   }


