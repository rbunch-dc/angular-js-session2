angular.module('myApp', []).controller('myController', function($scope){

	$scope.addPerson = function(){
		$scope.students.push({name: $scope.newName,desc: $scope.newDesc});
	}

	$scope.students = [
		{
			name: 'Freddy',
			desc: 'Made a cool football game'
		},
		{
			name: 'Chance',
			desc: 'Bootstrap Guy'
		},
		{
			name: 'Will',
			desc: 'The wig guy'
		},
		{
			name: 'Stephen',
			desc: 'Awesome theme!'
		},
		{
			name: 'Griffin',
			desc: 'DOTA2 addict'
		},
		{
			name: 'Oliver',
			desc: 'Eats 8 times/day'
		}

	];
});