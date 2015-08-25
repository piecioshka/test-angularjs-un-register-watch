(function () {
    'use strict';

    var mod = angular.module('unRegisterWatch', []);

    mod.controller('FirstController', function ($scope) {
        $scope.title = 'First';

        $scope.$watch('title', function (newValue, oldValue) {
            if (!angular.equals(newValue, oldValue)) {
                console.debug('FirstController: $scope.title was changed!');
            }
        });

        $scope.destroy = function () {
            $scope.$destroy();
        };

        $scope.$on('$destroy', function () {
            console.error('Scope #1 was destroyed!');
        });
    });

    mod.controller('SecondController', function ($scope) {
        $scope.title = 'Second';

        $scope.$watch('title', function (newValue, oldValue) {
            if (!angular.equals(newValue, oldValue)) {
                console.warn('SecondController: $scope.title was changed!');
            }
        });

        $scope.destroy = function () {
            $scope.$destroy();
        };

        $scope.$on('$destroy', function () {
            console.error('Scope #2 was destroyed!');
        });
    });

    angular.bootstrap(document, ['unRegisterWatch']);

}());
