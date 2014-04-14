'use strict';

describe('StrategyApp', function () {
    var $httpBackend, $rootScope, $state;
    beforeEach(module('StrategyApp'));

    beforeEach(inject(function (_$httpBackend_, _$rootScope_, _$state_) {
        $httpBackend = _$httpBackend_;
        $rootScope = _$rootScope_;
        $state = _$state_;
        $httpBackend.whenGET("partials/home.html").respond(200);
        $httpBackend.whenGET("partials/about.html").respond(200);
        $httpBackend.whenGET("partials/play.html").respond(200);
    }));

    describe('the initial page should be defined before the user does anything', function () {
        it('should be at the intro page', inject(function ($state) {
            expect($state.current.url).toBe("^");
            $httpBackend.flush();
            expect($state.current.name).toBe("home");
        }));
    });

    describe('when the route changes', function () {

        it('sets the title in the root scope', function () {
            $rootScope.$emit("$stateChangeSuccess", {title: "New title"}, null);
            expect($rootScope.title).toBe("New title");
        });

        it('goes to about', function () {
            $state.go("about");
            $httpBackend.flush();
            expect($state.current.url).toBe("/about");
            expect($rootScope.title).toBe("About");
        });
        it('goes to play', function () {
            $state.go("play");
            $httpBackend.flush();
            expect($state.current.url).toBe("/play");
            expect($rootScope.title).toBe("Play");
        });

    });
});
