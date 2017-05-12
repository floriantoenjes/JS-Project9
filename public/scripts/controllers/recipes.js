"use strict";

angular.module("app")

.controller("RecipesController", function ($scope, dataService) {
    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    dataService.getRecipes(function (response) {
        $scope.recipes = response.data;
    });

    $scope.filterRecipes = function (category) {
        dataService.getRecipesForCategory(category, function (response) {
            $scope.recipes = response.data;
        });
    };
});
