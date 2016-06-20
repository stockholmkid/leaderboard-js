var gameInfo = function(){
  return [
    {
      home_team: "Patriots",
      away_team: "Broncos",
      home_score: 7,
      away_score: 3
    },
    {
      home_team: "Broncos",
      away_team: "Colts",
      home_score: 3,
      away_score: 0
    },
    {
      home_team: "Patriots",
      away_team: "Colts",
      home_score: 11,
      away_score: 7
    },
    {
      home_team: "Steelers",
      away_team: "Patriots",
      home_score: 7,
      away_score: 21
    }
  ];
};
// YOUR CODE HERE

function Team(name) {
  this.name = name;
  this.wins = 0;
  this.losses = 0;

}


var league = {

  teams: [],
  games: gameInfo(),


  findTeam: function(teamName) {
    return this.teams.find(function(team) {
      return team.name === teamName;
    });

  },

  createTeams: function() {
    for (var i = 0; i < this.games.length; i++) {
      if(this.findTeam[this.games[i].home_team] === undefined){
        this.teams.push( new Team(this.games[i].home_team)); }
        else if(this.findTeam[this.games[i].away_team] === undefined){
          this.teams.push( new Team(this.games[i].away_team)); }
        }
         }
      };

league.createTeams()

console.log(league.teams)
