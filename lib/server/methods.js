Meteor.methods({
  'updatePoll': function (id, action, userId) {

    Pollings.update({_id: id}, {
      $push: {
        members: userId
      }
    });

    Pollings.update({_id: id}, {
      $inc: action
    });

    Pollings.update({_id: id}, {
      $inc: { voteCount: 1}
    });
  }
});
