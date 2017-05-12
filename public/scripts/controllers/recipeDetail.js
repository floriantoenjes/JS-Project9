"use strict";

angular.module("app")

.controller("RecipeDetailController", function ($location, $scope, dataService) {

    $scope.changeLocation = function (path) {
        $location.path("/" + path);
    };

});
