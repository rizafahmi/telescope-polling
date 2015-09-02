Template.telescopePolls.helpers({
  polls: function () {
    return Pollings.find({}, {sort: {createdDate: -1}});
  }
});
