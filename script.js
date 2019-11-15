var createPolitician = function (name, partyColor)
{
  var politician = {}

  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;
  
  politician.tallyVotes = function()
  {
      this.totalVotes = 0;
      for (var i = 0; i < this.electionResults.length; i++)
    {
         this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return politician;
}

var amanda = createPolitician("Amanda JW", [132, 17, 11]);
var kate = createPolitician("Kate AW", [245, 141, 136]);

console.log("Amanda's color is: " + amanda.partyColor);
console.log("Kate's color is: " + kate.partyColor);
 
amanda.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

kate.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

amanda.electionResults[9] = 1;
kate.electionResults[9] = 28;
amanda.electionResults[4] = 17;
kate.electionResults[4] = 38;
amanda.electionResults[43] = 11;
kate.electionResults[43] = 27;

var setStateResults = function(state)
{
  theStates[state].winner = null;
  if (amanda.electionResults[state] > kate.electionResults[state])
    {
      theStates[state].winner = amanda;
    }
  else if (kate.electionResults[state] > amanda.electionResults[state])
    {
      theStates[state].winner = kate;
    }
  var stateWinner = theStates[state].winner;
  if (stateWinner !== null)
    {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
  else
    {
      theStates[state].rgbColor = [11,32,57];
    }
  
  stateName.innerText = theStates[state].nameFull;
  stateAbbr.innerText = theStates[state].nameAbbrev;
  name1.innerText = amanda.name;
  results1.innerText = amanda.electionResults[state];
  name2.innerText = kate.name;
  results2.innerText = kate.electionResults[state];
  if (theStates[state].winner === null)
    {
      winnerName.innerText = "DRAW";
    }
  else
    {
      winnerName.innerText = theStates[state].winner.name;
    }
  
};

amanda.tallyVotes();
kate.tallyVotes();

console.log("Amanda: " + amanda.totalVotes);
console.log("Kate: " + kate.totalVotes);

var winner = "";

if (amanda.totalVotes > kate.totalVotes)
  {
    winner = amanda.name;
  }
else if (kate.totalVotes > amanda.totalVotes)
  {
    winner = kate.name;
  }
else
  {
    winner = draw;
  }

console.log("The winner is..." + winner);

var countryInfoTable = document.getElementById("countryResults");
var row = countryInfoTable.children[0].children[0];

row.children[0].innerText = amanda.name;
row.children[1].innerText = amanda.totalVotes;
row.children[2].innerText = kate.name;
row.children[3].innerText = kate.totalVotes;
row.children[5].innerText = winner;

var stateResultsTable = document.getElementById("stateResults");
var header = stateResultsTable.children[0];
var body = stateResultsTable.children[1];
var stateName = header.children[0].children[0];
var stateAbbr = header.children[0].children[1];
var name1 = body.children[0].children[0];
var results1 = body.children[0].children[1];
var name2 = body.children[1].children[0];
var results2 = body.children[1].children[1];
var winnerName = body.children[2].children[1];

