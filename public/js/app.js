angular.module('app', ['ngRoute'])
        .factory('sessionFactory', sessionFactory)
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .controller('navbarController', navbarController)
        .config(routes)
        ;
