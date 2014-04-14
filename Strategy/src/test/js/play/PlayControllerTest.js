'use strict';

describe('play.PlayController', function () {
    var $httpBackend, $scope, $state;
    var subject;

    beforeEach(module('PlayControllers'));

    beforeEach(inject(function ($controller, $rootScope) {
        $scope = $rootScope.$new();
        $controller('play.PlayController', {
            $scope: $scope,
            $rootScope: $rootScope
        });
    }));

    it('defines a gameboard', function () {
        expect($scope.gameboard).toBeDefined();
    });
});