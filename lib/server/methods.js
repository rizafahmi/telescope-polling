Meteor.methods({
  'updatePoll': function (id, action, userId) {

    Posts.update({_id: id}, {
      $push: {
        members: userId
      }
    });

    Posts.update({_id: id}, {
      $inc: action
    });

    Posts.update({_id: id}, {
      $inc: { voteCount: 1}
    });
  }
});
