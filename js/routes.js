angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.theColoradoEngineer', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/theColoradoEngineer.html',
        controller: 'theColoradoEngineerCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.about', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/about.html',
        controller: 'aboutCtrl'
      }
    }
  })

  .state('menu.findAMagazine', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/findAMagazine.html',
        controller: 'findAMagazineCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});