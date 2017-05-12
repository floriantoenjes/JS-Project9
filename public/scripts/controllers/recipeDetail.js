"use strict";

angular.module("app")

.controller("RecipeDetailController", function ($location, $scope, dataService) {

    /* Initialize Data */
    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    $scope.changeLocation = function (path) {
        $location.path("/" + path);
    };

});
