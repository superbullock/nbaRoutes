var app = angular.module('nbaRoutes');

app.service('teamService', function ($http, $q) {

  this.addNewGame = function (gameObj) {
    var url = 'https://api.parse.com/1/classes/' + gameObj.homeTeam;
    var deferred = $q.defer();
    if (parseInt(gameObj.homeTeamScore) > parseInt(gameObj.opponentScore)) {
      gameObj.won = true;
    } else {
      gameObj.won = false;
    }
    $http({
      method: 'POST',
      url: url,
      data: gameObj
    }).then(function (response) {
      deferred.resolve(response);
    });

    return deferred.promise;
  };

  this.getTeamData = function (teamName) {
    var deferred = $q.defer();
    var url = 'https://api.parse.com/1/classes/' + teamName;
    $http.get(url).then(function (response) {
      var results = response.data.results;
      var wins = 0;
      var losses = 0;
      results.forEach(function (game) {
        if (game.won === true) {
          wins++;
        } else {
          losses++;
        }
      });
      results.wins = wins;
      results.losses = losses;
      deferred.resolve(results);
    });

    return deferred.promise;
  };

});