Template.telescopePollingSubmit.helpers({
  categories: function () {
    return Categories.find();
  }
});

Template.telescopePollingSubmit.events({
  'submit form': function (event) {
    event.preventDefault();

    var newPoll = {
      question: event.target.question.value,
      choices: [
      { text: event.target.choice1.value, votes: 0 },
      { text: event.target.choice2.value, votes: 0 },
      { text: event.target.choice3.value, votes: 0 }
      ],
      category: event.target.category.value
    };
    var defaultProperties = {
      createdAt: new Date(),
      author: Users.getDisplayNameById(Meteor.userId()),
      userId: Meteor.userId(),
      voteCount: 0
    };

    newPoll = _.extend(defaultProperties, newPoll);
    var id = Pollings.insert(newPoll);
    if (id) {

      Router.go('telescopePollDetail', {id: id});
    }

  }
});
