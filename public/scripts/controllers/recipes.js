"use strict";

angular.module("app")

.controller("RecipesController", function ($location, $scope, dataService) {

    /**
    * Initialize Data
    */

    dataService.getCategories(function (response) {
        $scope.categories = response.data;
    });

    getAllRecipes($scope, dataService);

    /**
    * Functions
    */

    $scope.filterRecipes = function (category) {
        if (category === null) {
            getAllRecipes($scope, dataService);
            return;
        }
        dataService.getRecipesForCategory(category, function (response) {
            $scope.recipes = response.data;
        });
    };

    $scope.changeLocation = function (path) {
        $location.path("/" + path);
    };

});

function getAllRecipes($scope, dataService) {
    dataService.getRecipes(function (response) {
        $scope.recipes = response.data;
    });
}
