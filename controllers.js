angular.module("app").config(function(socialProvider){
	socialProvider.setGoogleKey("1027792538513-vkb9rn0tf90d1bbvsim7ggm5jnnahphp.apps.googleusercontent.com");
});

angular.module("app").controller("HomeController", ["$rootScope","$scope", "syncObject", "FirebaseService", "$timeout","$sce", function($rootScope,$scope, syncObject, FirebaseService, $timeout) {

  $("#main").hide();

  var limitStep = -7;
  $scope.limit = limitStep;
  $scope.more = function() {
      $scope.limit += limitStep;
  };
  
  $scope.change = function(value){
    $scope.setor = value
    $scope.data = FirebaseService.getPosts($scope.setor,$scope.id);
}


$scope.$on('event:social-sign-in-success', function(event, userDetails) {
  $scope.result = userDetails;
  $scope.id = $scope.result.uid;
  $("#login").hide();
  $("#main").show();
  $scope.$apply();
});

$scope.logout = function() {
  document.location.href = "https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://celfons.marcelfonseca.com.br/chat-zup/#/";
}

var d   = new Date();
var dtF = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/" + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

$scope.dt = dtF;

$scope.addMessage = function() {

  if($scope.setor == null){
     alert('Selecione o Setor correspondente clicando nas opções do lado esquerdo!');
  }

 if ($scope.body && $scope.setor) {
     
   FirebaseService.add({ id: $scope.id, body: $scope.body, setor: $scope.setor ,setor_usuario: $scope.setor+$scope.id, date: $scope.dt, active: true });

   $scope.body = "";
   $scope.dt = dtF;
 }
};
}
]);
	