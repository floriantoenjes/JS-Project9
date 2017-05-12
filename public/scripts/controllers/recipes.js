"use strict";

! function () {

    angular.module("app")

    .controller("RecipesController", function ($location, $scope, dataService) {

    /**
     * Initialize Data
     */

        dataService.getCategories(function (response) {
            $scope.categories = response.data;
        });

        getAllRecipes();


    /**
     * Functions
     */

        $scope.filterRecipes = function (category) {
            if (category === null) {
                getAllRecipes();
            } else {
                dataService.getRecipesForCategory(category, function (response) {
                    $scope.recipes = response.data;
                });
            }
        };

        $scope.changeLocation = function (path) {
            $location.path("/" + path);
        };

        $scope.deleteRecipe = function (recipe) {
            if (confirm(`Do you really want to delete the ${recipe.name} recipe?`)) {
                dataService.deleteRecipe(recipe._id);
                getAllRecipes($scope, dataService);
            }
        }

        function getAllRecipes() {
            dataService.getRecipes(function (response) {
                $scope.recipes = response.data;
            });
        }

    });

}();
