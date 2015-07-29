var app = angular.module( "Demo", [] );

app.controller("AppController", function( $scope, serviceOne ) {
	$scope.isShowingContainer = false;

	$scope.toggleContainer = function() {
		$scope.isShowingContainer = ! $scope.isShowingContainer;
	};
});

app.controller("SubController",	function( $scope, serviceTwo ) {
});

app.service("serviceOne", function($window) {
	console.log( "Service one instantiated." );

	// Hook into the unload event of the app clean up service (ex, persist
	// relevant data to localStorage).
	$window.addEventListener("unload", function handleOnUnloadEvent( event ) {
		console.warn( "Service ONE hooked into window unload event." );
	});
});

app.service("serviceTwo", function() {
	console.log("Servce two instantiated.");
});