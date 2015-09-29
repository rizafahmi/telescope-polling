Template.telescopePolls.helpers({
  polls: function () {
    return Pollings.find({}, {sort: {voteCount: -1}});
  }
});
