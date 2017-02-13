'use strict';

var app = angular.module('weThemUs', ['ngRoute', 'ngSanitize']).config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: '/components/pages/home.tpl',
		reloadOnSearch: false
	}).when('/:slug', {
		templateUrl: '/components/pages/portfolio.tpl',
		reloadOnSearch: false
	}).otherwise('/');

	$locationProvider.html5Mode(true);
}]);
'use strict';

app.component('home', {
    templateUrl: '/components/home/home.tpl',
    controller: ['$scope', 'WordpressData', function ($scope, WordpressData) {

        $scope.test = 'testing';

        WordpressData.listHome(function (response) {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
});
'use strict';

app.factory('WordpressData', function ($http) {
  return {
    listHome: function listHome(callback) {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
    },
    listPortfolio: function listPortfolio(callback) {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/portfolio/18').then(callback);
    }
  };
});
'use strict';

app.component('sidenav', {
    templateUrl: '/components/sidenav/sidenav.tpl',
    controller: ['$scope', function ($scope) {

        $scope.test = 'this is only a test';
    }]
});
'use strict';

app.component('portfolio', {
    templateUrl: '/components/portfolio/portfolio.tpl',
    controller: ['$scope', 'WordpressData', function ($scope, WordpressData) {

        $scope.test = 'portfolio testing';

        WordpressData.listPortfolio(function (response) {
            $scope.data = response.data.acf;
            console.log('data', $scope.data);
        });
    }]
});