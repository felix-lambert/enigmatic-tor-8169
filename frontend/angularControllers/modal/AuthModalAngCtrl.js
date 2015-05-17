angular.module('InTouch')
  .controller('AuthModalAngCtrl', AuthModalAngCtrl);

AuthModalAngCtrl.$inject = ['Username', '$scope', '$modalInstance'];

function AuthModalAngCtrl(Username, $scope, $modalInstance) {

  $scope.saveUser = function() {
    console.log('save user');
    console.log(this.username);
    Username.postUsername({username: this.username}).then(function(response) {
      console.log('username success');
      $modalInstance.dismiss(response);
    });
  };
  $scope.cancel = function() {
    $modalInstance.dismiss('cancel');
  };
}
