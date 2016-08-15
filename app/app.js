(function (angular) {
    "use strict";

    // start your ride
    // 创建一个模块,所有子模块需要在主模块中引入
    var app  = angular.module('moviecat',[
      'moviecat.in_theaters',
      'moviecat.home_page',
      'moviecat.coming_soon',
      'moviecat.top250'
      ]);

})(angular);