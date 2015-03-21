describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('ToDoController', {
      $scope: scope
    });
  }));

  it('initialises with an empty entry field', function() {
    expect(scope.newToDo).toBeUndefined();
  });

  it('initialises with an empty list', function() {
    expect(scope.todos).toEqual([]);
  });

  it('displays added tasks to the list', function() {
    scope.newToDo = "walk the dog";
    scope.addToDo();
    expect(scope.todos[0].title).toEqual("walk the dog");
  });

  var itemDone = {"title":"shopping", "done":true};

  it('displays a ticked checkbox when task is done', function() {
    scope.todos.push(itemDone);
    expect(scope.todos[0].done).toBe(true);
  });

  it('can remove completed taks from the list', function(){
    scope.todos.push(itemDone);
    scope.clearCompleted();
    expect(scope.todos).toEqual([]);
  });

});