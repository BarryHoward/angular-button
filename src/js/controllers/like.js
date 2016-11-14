function LikeController ($scope){
	$scope.count = 0;

	$scope.countUp = function (){
		$scope.count++;
	}



}

LikeController.$inject = ['$scope'];
export {LikeController};