Template.telescopePollDetail.helpers({
  'poll': function () {
    return Pollings.findOne();
  },
  'disabled': function () {
    var poll = Pollings.findOne();

    // check for Meteor.userId() is in poll.members
    var memberTaken = _.find(poll.members, function (item) {
      return item === Meteor.userId();
    });

    if (!memberTaken) {
      return "";
    }
    else {
      return "disabled";
    }
  
  }
});


Template.telescopePollDetail.events({
  'click .vote': function (event) {
    event.preventDefault();

    var pollId = $(event.currentTarget).parent('.poll').data('id');
    var voteId = $(event.currentTarget).data('id');

    var voteString = 'choices.' + voteId + '.votes';
    var action = {};
    action[voteString] = 1;

    Meteor.call('updatePoll', pollId, action, Meteor.userId());
  }
});
