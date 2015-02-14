angular.module('nbaRoutes').controller('homeCtrl', function ($scope, homeService, allData) {
  $scope.allData = allData;

  if (team === 'utahjazz') {
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
  } else if ($routeParams.team === 'miamiheat') {
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
  } else if ($routeParams.team === 'losangeleslakers') {
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = '/images/lakers-logo.png';
  }

});