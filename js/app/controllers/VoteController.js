function VoteController() {
    
    this.votes = 5;
    var myVote = 0

    this.incrementVotes = function () {    
      if(myVote == 0){
        this.votes++;
        myVote = 1;
      } else if (myVote == -1){
        this.votes++;
        myVote = 0;
      } else {
        this.decrementVotes();
      }

    };

    this.decrementVotes = function () {
      if(myVote == 0){
        this.votes--;
        myVote = -1;
      } else if (myVote == 1){
        this.votes--;
        myVote = 0;
      } else {
        this.incrementVotes();
      }
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);