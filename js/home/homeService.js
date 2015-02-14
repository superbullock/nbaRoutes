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
        debugger;
      }
      deferred.resolve(allTeamData);
    });
    return deferred.promise;
  };
});