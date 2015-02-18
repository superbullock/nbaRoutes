angular.module('nbaRoutes').controller('teamCtrl', function ($scope, $routeParams, teamService, teamData) {

  $scope.teamData = teamData;
  $scope.newGame = {};
  $scope.showNewGameForm = false;


  $scope.toggleNewGameForm = function () {
    $scope.showNewGameForm = !$scope.showNewGameForm;
  };



  if ($routeParams.team === 'utahjazz') {
    $scope.homeTeam = 'Utah Jazz';
    $scope.logoPath = 'images/jazz-logo.png';
  } else if ($routeParams.team === 'miamiheat') {
    $scope.homeTeam = 'Miami Heat';
    $scope.logoPath = 'images/heat-logo.png';
  } else if ($routeParams.team === 'losangeleslakers') {
    $scope.homeTeam = 'Los Angeles Lakers';
    $scope.logoPath = '/images/lakers-logo.png';
  }



  $scope.submitGame = function () {
    $scope.newGame.homeTeam = $scope.homeTeam.split(' ').join('').toLowerCase()
    $scope.newGame
    teamService.addNewGame($scope.newGame).then(function (response) {
      teamService.getTeamData($scope.newGame.homeTeam).then(function (data) {
        $scope.teamData = data;
        $scope.newGame = {};
        $scope.showNewGameForm = false;
      });
    });
  };



  //  var findTeams = function () {
  //    var teams = [];
  //    teamData.forEach(function (game) {
  //      if (teams.indexOf(game.opponent) === -1) {
  //        if (game.opponent) {
  //          teams.push(game.opponent);
  //        }
  //      }
  //
  //    });
  //
  //    return teams;
  //  };
  //  $scope.teams = findTeams();

});