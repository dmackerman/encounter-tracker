 export default /* @ngInject */ function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('public.home', {
        url: "/home",
        views: {
            'content@': {
                templateUrl: require("./home.tpl.html"),
                controller: "HomeController as home"
            }
        }
    });
    $urlRouterProvider.otherwise("/public/home");
}