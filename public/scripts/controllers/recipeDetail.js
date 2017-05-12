"use strict";

angular.module("app")

.controller("RecipeDetailController", function ($location, $scope, dataService) {

    /* Initialize Data */
    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    dataService.getFoodItems(function (response) {
        $scope.foodItems = response.data;
    });

    /* Functions */
    $scope.changeLocation = function (path) {
        $location.path("/" + path);
    };

    $scope.addIngredient = function () {
        if ($scope.ingredients === undefined) {
            $scope.ingredients = [{}];
        } else {
            $scope.ingredients.push({});
        }
    }

});
