Template.telescopePollingSubmit.events({
  'submit form': function (event) {
    event.preventDefault();

    var newPoll = {
      question: event.target.question.value,
      choices: [
      { text: event.target.choice1.value, votes: 0 },
      { text: event.target.choice2.value, votes: 0 },
      { text: event.target.choice3.value, votes: 0 }
      ]
    };
    var defaultProperties = {
      createdAt: new Date(),
      author: Users.getDisplayNameById(Meteor.userId()),
      userId: Meteor.userId()
    };

    newPoll = _.extend(defaultProperties, newPoll);
    var id = Pollings.insert(newPoll);
    if (id) {
      // FIXME: Change the route into single poll page

      Router.go('telescopePollDetail', {id: id});
    }

  }
});
