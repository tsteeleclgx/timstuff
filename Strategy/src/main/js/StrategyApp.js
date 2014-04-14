var states = angular.module('states', ['ui.router']);
angular.module('PlayControllers', []);
var app = angular.module('StrategyApp', ['PlayControllers', 'states', 'ngGrid']);

states.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider) {
        $stateProvider.
            state('home', {
                url: '/home',
                title: "Home",
                templateUrl: 'partials/home.html'
            }).
            state('play', {
                url: '/play',
                title: "Play",
                templateUrl: 'partials/play.html'
            }).
            state('about', {
                url: '/about',
                title: "About",
                templateUrl: 'partials/about.html'
            });
    }]);

app.run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.title = '';
    $rootScope.$on('$stateChangeSuccess',
        function (event, toState) {
            $rootScope.title = toState.title;
        });
    $state.go('home');
}]);

