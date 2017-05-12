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

        $scope.deleteRecipe = function (id) {
            dataService.deleteRecipe(id);
            getAllRecipes($scope, dataService);
        }

        function getAllRecipes() {
            dataService.getRecipes(function (response) {
                $scope.recipes = response.data;
            });
        }

    });

}();
