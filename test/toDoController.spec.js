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
    expect(scope.todos).toBeUndefined();
  });

  describe('when adding a to-do item', function() {

    it('displays item in the list', function() {
      scope.newToDo = 'walk the dog';
      scope.addToDo();
      scope.$apply();
      httpBackend.flush();
    });
  });


});