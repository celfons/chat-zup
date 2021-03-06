angular.module("app").controller("RhController", ["$rootScope","$scope", "syncObject", "FirebaseService", "$timeout","$sce", function($rootScope,$scope, syncObject, FirebaseService, $timeout) {

  var limitStep = -7;
  $scope.limit = limitStep;
  $scope.more = function() {
      $scope.limit += limitStep;
      document.getElementById('datas').scrollTop = document.getElementById('datas').scrollHeight;
  };
  
$scope.exibir = function(value){
    $scope.data = FirebaseService.getMensagem(value);
    $scope.setor = 'rh';
    $scope.id = value;
}

$scope.resolver = function(id){
    FirebaseService.update(id)
}

$scope.mensagens = FirebaseService.getSetor();

var d   = new Date();
var dtF = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/" + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

$scope.dt = dtF;

$scope.user = 'setor';

$scope.addMessage = function() {
     if($scope.id == null) {
        alert("Selecione um usuario para responder");
    }
     
 if ($scope.msg && $scope.id) {

   FirebaseService.add({ id: $scope.id, body: $scope.msg, setor: $scope.setor ,setor_usuario: $scope.setor+$scope.id, date: $scope.dt, active: true , host : 'setor'});

   $scope.msg = "";
   $scope.dt = dtF;
   document.getElementById('datas').scrollTop = document.getElementById('datas').scrollHeight;
 }
};
}
]);
	