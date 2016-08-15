/*
* @Author: huoqishi
* @Date:   2016-07-29 17:03:20
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-29 17:20:16
*/

(function(angular){
  'use strict';
  // 这里是正在热模块
  var app = angular.module('moviecat.coming_soon',['ngRoute']);

  // 自己管理自己的路由
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/coming_soon',{
      // 注意这时路径是相当app.js（主模块）所在目录
      templateUrl:'./coming_soon/view.html',
      controller:'coming_soonController'
    })
  }]);
  // 创建控制器
  app.controller('coming_soonController',['$scope',function($scope){
     //
     
  }]);
})(angular)