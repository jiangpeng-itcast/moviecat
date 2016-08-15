/*
* @Author: huoqishi
* @Date:   2016-07-29 17:03:20
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-29 17:38:48
*/

(function(angular){
  'use strict';
  // 这里是正在热模块
  var app = angular.module('moviecat.in_theaters',['ngRoute']);

  // 自己管理自己的路由
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/in_theaters',{
      // 注意这时路径是相当app.js（主模块）所在目录
      templateUrl:'./in_theaters/view.html',
      controller:'in_theatersController'
    })
  }]);
  // 创建控制器
  app.controller('in_theatersController',[
    '$scope','$http',function($scope,$http){
     //
     
     $http.get('./in_theaters/in_theaters.json').then(function(response){
      console.log(response.data);
      $scope.data=response.data;
       // console.log(xx);
     })
  }]);
})(angular)