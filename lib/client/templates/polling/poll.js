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
