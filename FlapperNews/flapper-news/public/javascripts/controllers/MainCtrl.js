'use strinct';

app.controller('MainCtrl', [
'$scope',
'posts',
'auth',
function($scope, posts, auth){
	$scope.isLoggedIn = auth.isLoggedIn;
	$scope.posts = posts.posts;
	
	$scope.addPost = function() {
		if ($scope.title === '') { return; }
		posts.create({
			title: $scope.title,
			link: $scope.link,
		});
		$scope.title = '';
		$scope.link = '';
	};
	
	$scope.deletePost = function(post) {
		posts.delete(post);
	}
	
	$scope.incrementUpvotes = function(post) {
		posts.upvote(post);
	};
}])