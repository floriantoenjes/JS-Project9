"use strict";

angular.module("app")

.controller("RecipesController", function ($scope, dataService) {
    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    getAllRecipes($scope, dataService);

    $scope.filterRecipes = function (category) {
        if (category === null) {
            getAllRecipes($scope, dataService);
            return;
        }
        dataService.getRecipesForCategory(category, function (response) {
            $scope.recipes = response.data;
        });
    };
});

function getAllRecipes($scope, dataService) {
    dataService.getRecipes(function (response) {
        $scope.recipes = response.data;
    });
}
