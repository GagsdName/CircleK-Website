
var User = require('./scripts/app.js');
console.log(User);
angular.module('formExample', [])
      .controller('ExampleController', ['$scope', function($scope) {
        $scope.master = {};
        $scope.update = function(user) {
          if ($scope.formx.$valid) {
            $scope.master = angular.copy(user);
            alert('Form has been validated successfully');
			User.find({}).remove(function() {
	User.create({
    provider: 'local',
    name: user.name,
  }, function() {
      console.log('finished populating users');
    }
  );
});
			return $scope.master;
          }
        };
        $scope.reset = function() {
          $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
      }]);
