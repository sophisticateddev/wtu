import Sidenav from './components/sidenav/sidenav';
import Home from './components/home/home';
import Portfolio from './components/portfolio/portfolio';

const app = angular.module('weThemUs', ['ngRoute', 'ngSanitize'])

.config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
	$routeProvider
	    .when('/', {
	        templateUrl: '/components/pages/home.tpl',
	        reloadOnSearch: false
	    })
	    .when('/:slug', {
	        templateUrl: '/components/pages/portfolio.tpl',
	        reloadOnSearch: false
	    })
	    .otherwise('/');

   $locationProvider.html5Mode(true);
}])

.factory('WordpressData', ($http) => {

  var portfolio = null;

  return {
    listHome: (callback) => {
      $http.get('http://alex-abbott.com/wtu/wp-json/acf/v2/home/12').then(callback);
    },
    renderPortfolio: (callback) => {
    	if (!portfolio) {
  			// get it green...
  			console.log('getting polio...');
  			return(
  				$http.get(
							'http://alex-abbott.com/wtu/wp-json/wp/v2/portfolio'
							// required setting "Show in REST API" within WCK
			 				// Post Type editor (portfolio, advanced options)
					)
					.then((data) => {
							portfolio = data;
							callback(portfolio);
					})
				)
    	}
    	callback(portfolio);
  	}
  }
})

.component('sidenav', Sidenav)
.component('home', Home)
.component('portfolio', Portfolio);
