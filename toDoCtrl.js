angular.module('todoApp', [])
  .controller('TodoListController', function($scope) {
    var todoList = this;
    todoList.todos = [];
    $scope.predicate = 'date';
    $scope.reverse = false;

    $scope.order = function(predicate) {
    $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
    $scope.predicate = predicate;
    };

    todoList.addTodo = function() {
      todoList.todos.push({name:todoList.todoName, date:todoList.todoDate, description:todoList.todoDescription, done:false});
      todoList.todoText = '';
    };

    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
