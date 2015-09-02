Template.telescopePoll.events({
  'click .vote': function (event) {
    event.preventDefault();

    var pollId = $(event.currentTarget).parent('.poll').data('id');
    var voteId = $(event.currentTarget).data('id');

    var voteString = 'choices.' + voteId + '.votes';
    var action = {};
    action[voteString] = 1;

    var update = Pollings.update({_id: pollId}, {
      $inc: action
    });
  }
});

Template.telescopePoll.helpers({
  'getTotalVotes': function (id) {
    var poll = Pollings.findOne(id);
    var totalVotes = 0;
    _.each(poll.choices, function (choice) {
      totalVotes = totalVotes + choice.votes;
    });
    return totalVotes;
  }
})
