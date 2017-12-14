angular.module("app").service("FirebaseService", function($firebaseArray, $firebaseObject) {
    var vm = this;

    vm.ref = new Firebase("https://chat-zup.firebaseio.com/");

    vm.ref.child('.info/connected').on('value', function(connectedSnap) {
      if (connectedSnap.val() === true) {
        /* we're connected! */
      } else {
        Firebase.goOnline();
      }
    });
     
    vm.addPosts = vm.ref.child("posts");
    
    this.getSetor = function(){
      vm.posts = vm.ref.child("posts").orderByChild("setor").equalTo('rh');
      vm.syncObject = $firebaseArray(vm.posts);
      return vm.syncObject;
    }

    this.add = function(post) {
      vm.addPosts.push(post);
    };
    
    this.getMensagem = function(value){
        vm.posts = vm.ref.child("posts").orderByChild("setor_usuario").equalTo('rh'+value);
        vm.syncObject = $firebaseArray(vm.posts);
        return vm.syncObject;
    }

    this.getPosts = function(setor,id) {
      if(setor == null){
          setor = '';
      }
      if(id == null){
          id = '';
      }
      vm.posts = vm.ref.child("posts").orderByChild("setor_usuario").equalTo(setor+id);
      vm.syncObject = $firebaseArray(vm.posts);
      return vm.syncObject;
    };

  });
