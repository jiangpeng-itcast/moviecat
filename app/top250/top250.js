/*
* @Author: huoqishi
* @Date:   2016-07-29 17:03:20
* @Last Modified by:   huoqishi
* @Last Modified time: 2016-07-29 17:21:01
*/

(function(angular){
  'use strict';
  // 这里是正在热模块
  var app = angular.module('moviecat.top250',['ngRoute']);

  // 自己管理自己的路由
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/top250',{
      // 注意这时路径是相当app.js（主模块）所在目录
      templateUrl:'./top250/view.html',
      controller:'top250Controller'
    })
  }]);
  // 创建控制器
  app.controller('top250Controller',['$scope',function($scope){
     //
     
  }]);
})(angular)