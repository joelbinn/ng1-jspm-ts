/// <reference path="../declarations.d.ts" />
const template = `
<h2>Hallå!</h2>
<button class="btn btn-primary" ng-click="handleClick()">Banan</button>
`;

export default {
    name: 'hello',
    definition: () => {
        return {
            template: template,
            controller: function ($scope) {
                $scope.handleClick = function () {
                    console.log('Clicked');
                }
            }
        }
    }
}