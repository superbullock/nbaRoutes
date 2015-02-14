var app = angular.module('nbaRoutes');

app.service('homeService', function ($http, $q, teamService) {
  this.getAllData = function () {
    var teams = ['utahjazz', 'losangeleslakers', 'miamiheat']
    var deferred = $q.defer();
    var allTeamData = {};
    var promises = [];
    for (var i = 0; i < teams.length; i++) {
      promises.push(teamService.getTeamData(teams[i]))
    }
    $q.all(promises).then(function (data) {
      for (var j = 0; j < data.length; j++) {
        allTeamData[teams[j]] = data[j];
      }
      allTeamData.utahjazz.logo = 'images/jazz-logo.png';
      allTeamData.utahjazz.name = 'Utah Jazz'
      allTeamData.losangeleslakers.logo = 'images/lakers-logo.png';
      allTeamData.losangeleslakers.name = 'Los Angeles Lakers'
      allTeamData.miamiheat.logo = 'images/heat-logo.png'
      allTeamData.miamiheat.name = 'Miami Heat'
      deferred.resolve(allTeamData);
    });
    return deferred.promise;
  };
});