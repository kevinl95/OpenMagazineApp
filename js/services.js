angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.controller('RssFeedCtrl', function($http, $scope) {
  $scope.init = function() {
            $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v" : "1.0", "q" : "https://cem.colorado.edu/rss.xml", "num" : "10" }})
  .error(function(data) {
    console.log(data);
  })
  .success(function(data) {
    $scope.entries = data.responseData.feed.entries;
  })
 };
})
.service('BlankService', [function(){

}]);

