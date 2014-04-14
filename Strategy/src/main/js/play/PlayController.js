'use strict';

angular.module('PlayControllers').controller('play.PlayController', ['$scope', '$rootScope',
    function ($scope, $rootScope) {
        // why doesn't scope work
        $rootScope.gameboard = [
            {
                col1: "cell1",
                col2: "cell1",
                col3: "cell1"
            },
            {
                col1: "cell1",
                col2: "cell1",
                col3: "cell1"
            },
            {
                col1: "cell1",
                col2: "cell1",
                col3: "cell1"
            }
        ];
        $rootScope.gameboardTableOptions = {
            data: 'gameboard',
            columnDefs: [
                {
                    field: 'col1',
                    displayName: 'col1',
                    cellTemplate: '<button>{{row.entity.col1}}</button>'
                },
                {
                    field: 'col2',
                    displayName: 'col2',
                    cellTemplate: '<button>{{row.entity.col2}}</button>'
                },
                {
                    field: 'col3',
                    displayName: 'col3',
                    cellTemplate: '<button>{{row.entity.col3}}</button>'
                }
            ]

        };
    }]);