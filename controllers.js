angular.module("app").config(function(socialProvider){
	socialProvider.setGoogleKey("780126296827-0b1lgmj2jr6jd9mbj00veb8qnd7r5g4t.apps.googleusercontent.com");
});

angular.module("app").controller("HomeController", ["$rootScope","$scope", "syncObject", "FirebaseService", "$timeout","$sce", function($rootScope,$scope, syncObject, FirebaseService, $timeout) {

  $("#main").hide();

  var limitStep = -7;
  $scope.limit = limitStep;
  $scope.more = function() {
      $scope.limit += limitStep;
      document.getElementById('datas').scrollTop = document.getElementById('datas').scrollHeight;
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

$scope.user = 'usuario';

var d   = new Date();
var dtF = (d.getDate() < 10 ? "0" : "") + d.getDate() + "/" + (d.getMonth() + 1 < 10 ? "0" : "") + (d.getMonth() + 1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

$scope.dt = dtF;

$scope.addMessage = function() {

  if($scope.setor == null){
     alert('Selecione o Setor correspondente clicando nas opções do lado esquerdo!');
  }

 if ($scope.body && $scope.setor) {
    var name = random() ; 
   FirebaseService.add({ id: $scope.id, body: $scope.body, setor: $scope.setor ,setor_usuario: $scope.setor+$scope.id, date: $scope.dt, active: true, host : 'usuario', nome : name });

   $scope.body = "";
   $scope.dt = dtF;
   document.getElementById('datas').scrollTop = document.getElementById('datas').scrollHeight;
 }
};

function random () {
return nomes[Math.random() * nomes.length | 0];
}
var nomes = [
  {
    "name" : "Cherish"
  },
  {
    "name" : "Sharleen"
  },
  {
    "name" : "Velma"
  },
  {
    "name" : "Merlin"
  },
  {
    "name" : "Guillermina"
  },
  {
    "name" : "Manie"
  },
  {
    "name" : "Annelle"
  },
  {
    "name" : "Gillian"
  },
  {
    "name" : "Shandra"
  },
  {
    "name" : "Gonzalo"
  },
  {
    "name" : "Pauline"
  },
  {
    "name" : "Ela"
  },
  {
    "name" : "Eveline"
  },
  {
    "name" : "Kasha"
  },
  {
    "name" : "Fidela"
  },
  {
    "name" : "Octavio"
  },
  {
    "name" : "Kristyn"
  },
  {
    "name" : "Misha"
  },
  {
    "name" : "Lamont"
  },
  {
    "name" : "Khalilah"
  },
  {
    "name" : "Tatiana"
  },
  {
    "name" : "Johanne"
  },
  {
    "name" : "Marcela"
  },
  {
    "name" : "Wai"
  },
  {
    "name" : "Janene"
  },
  {
    "name" : "Vania"
  },
  {
    "name" : "Adriana"
  },
  {
    "name" : "Alexia"
  },
  {
    "name" : "Mittie"
  },
  {
    "name" : "Lindsay"
  },
  {
    "name" : "Jerrod"
  },
  {
    "name" : "Shelia"
  },
  {
    "name" : "Mathilda"
  },
  {
    "name" : "Sona"
  },
  {
    "name" : "Melanie"
  },
  {
    "name" : "Eddy"
  },
  {
    "name" : "Richard"
  },
  {
    "name" : "Junie"
  },
  {
    "name" : "Ana"
  },
  {
    "name" : "Fatimah"
  },
  {
    "name" : "Dion"
  },
  {
    "name" : "Natacha"
  },
  {
    "name" : "Crissy"
  },
  {
    "name" : "Tommye"
  },
  {
    "name" : "Beverlee"
  },
  {
    "name" : "Joana"
  },
  {
    "name" : "Berta"
  },
  {
    "name" : "Renetta"
  },
  {
    "name" : "Fritz"
  },
  {
    "name" : "Stephine"
  },
  {
    "name" : "Hilton"
  },
  {
    "name" : "Ileen"
  },
  {
    "name" : "Keith"
  },
  {
    "name" : "Myriam"
  },
  {
    "name" : "Antione"
  },
  {
    "name" : "Benjamin"
  },
  {
    "name" : "Edna"
  },
  {
    "name" : "Georgia"
  },
  {
    "name" : "Mora"
  },
  {
    "name" : "Carola"
  },
  {
    "name" : "Eliseo"
  },
  {
    "name" : "Kelsie"
  },
  {
    "name" : "Miquel"
  },
  {
    "name" : "Kassie"
  },
  {
    "name" : "Nathaniel"
  },
  {
    "name" : "Katie"
  },
  {
    "name" : "Sharilyn"
  },
  {
    "name" : "Marcus"
  },
  {
    "name" : "Pete"
  },
  {
    "name" : "Millie"
  },
  {
    "name" : "Markita"
  },
  {
    "name" : "Dave"
  },
  {
    "name" : "Maryanne"
  },
  {
    "name" : "Fermina"
  },
  {
    "name" : "Lennie"
  },
  {
    "name" : "Serena"
  },
  {
    "name" : "Vernia"
  },
  {
    "name" : "Joella"
  },
  {
    "name" : "Asha"
  },
  {
    "name" : "Cruz"
  },
  {
    "name" : "Felicita"
  },
  {
    "name" : "Jasmin"
  },
  {
    "name" : "Earlean"
  },
  {
    "name" : "Luise"
  },
  {
    "name" : "Van"
  },
  {
    "name" : "Romona"
  },
  {
    "name" : "Salvatore"
  },
  {
    "name" : "Ivonne"
  },
  {
    "name" : "Tessie"
  },
  {
    "name" : "Jaquelyn"
  },
  {
    "name" : "Letha"
  },
  {
    "name" : "Keesha"
  },
  {
    "name" : "Jolene"
  },
  {
    "name" : "Fernanda"
  },
  {
    "name" : "Yoko"
  },
  {
    "name" : "Parthenia"
  },
  {
    "name" : "Frankie"
  },
  {
    "name" : "Emilie"
  },
  {
    "name" : "Terica"
  },
  {
    "name" : "Shondra"
  }
];

}
]);
	