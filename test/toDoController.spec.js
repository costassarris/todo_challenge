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

  it('knows when a task is complete', function() {
    scope.todos.push(itemDone);
    expect(scope.todos[0].done).toBe(true);
  });

  it('can remove completed tasks from the list', function(){
    scope.todos.push(itemDone);
    scope.clearCompleted();
    expect(scope.todos).toEqual([]);
  });

  it('can clear all tasks from list', function() {
    scope.newToDo = "walk the dog";
    scope.addToDo();
    scope.newToDo = "go to the gym";
    scope.addToDo();
    scope.clearAll();
    expect(scope.todos).toEqual([]);
  });

  it('knows the number of incomplete tasks', function() {
    scope.newToDo = "walk the dog";
    scope.addToDo();
    scope.newToDo = "go to the gym";
    scope.addToDo();
    expect(scope.incompleteTotal()).toEqual(2);
  });

  it('knows the number of completed tasks', function() {
    scope.todos.push(itemDone);
    expect(scope.completedTotal()).toEqual(1);
  });

});