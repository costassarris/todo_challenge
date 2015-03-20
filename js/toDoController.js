toDo.controller('ToDoController', ['$scope', function($scope) {
  $scope.todos = [];

  $scope.addToDo = function(){
    $scope.todos.push({'title':$scope.newToDo, 'done':false});
    $scope.newToDo = '';
    console.log($scope.todos[0].title);
  }

}]);