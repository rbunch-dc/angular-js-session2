angular.module('myApp', []).controller('myController', function($scope, $http){

	$scope.addPerson = function(){
		$scope.students.push(
			{
				name: $scope.newName,
				desc: $scope.newDesc
			}
		);
		$scope.newName = "";
		$scope.newDesc = "";
		console.log($scope.myTestVar);
	}

	$scope.removeStudent = function(studentToRemove){
		var i = $scope.students.indexOf(studentToRemove);
		$scope.students.splice(i,1);
	}

	$scope.students = [
		{
			name: 'Freddy',
			desc: 'Made a cool football game',
			luckyNumber: 9
		},
		{
			name: 'Chance',
			desc: 'Bootstrap Guy',
			luckyNumber: 11
		},
		{
			name: 'Will',
			desc: 'The wig guy',
			luckyNumber: 153
		},
		{
			name: 'Stephen',
			desc: 'Awesome theme!',
			luckyNumber: 40000000000	
		},
		{
			name: 'Griffin',
			desc: 'DOTA2 addict',
			luckyNumber: 63
		},
		{
			name: 'Oliver',
			desc: 'Eats 8 times/day',
			luckyNumber: 32			
		}

	];

		// // playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId='+playlistId'+&key='+apiKey;
		// singleVideoUrl = 'https://www.googleapis.com/youtube/v3/videos?id='+videoId+'&part=snippet,statistics&key='+apiKey;

  //       $http.get(singleVideoUrl).success(function(data) {
  //         $scope.videos = data.items[0];
  //         console.log(data.items[0].snippet);
  //       });


});



