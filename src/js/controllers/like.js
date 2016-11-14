function LikeController ($scope){
	$scope.count = 0;
	$scope.string = "Likes: " + $scope.count;
	$scope.up = true;
	$scope.upString = "Up";

	$scope.countUp = function (){

		if ($scope.up){
			$scope.count++;
		} else {
			$scope.count--;
		}

		if ($scope.count<0){
			$scope.count = 0;
		}

		if ($scope.count === 1){
			$scope.string = "Like: " + $scope.count;			
		} else {
			$scope.string = "Likes: " + $scope.count;
		}
	}

	$scope.toggle = function(){
		$scope.up = !$scope.up;
		if ($scope.up){
			$scope.upString = "Up";
		} else {
			$scope.upString = "Down";
		}
	}

}

LikeController.$inject = ['$scope'];
export {LikeController};