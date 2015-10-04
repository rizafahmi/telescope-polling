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


    if ( newPoll['category'] ) {
      existingPolling = Pollings.findOne({category: newPoll['category']});

      if ( existingPolling ) {
        Messages.flash("Only one polling per category allowed. Going to the poll right now...", "error");
        //throw new Meteor.Error( 500, "Only one polling per category allowed. Please choose another category.");
        Meteor.setTimeout( function () {
          console.log("Redirecting...");
          Router.go('telescopePollDetail', {id: existingPolling._id});
        }, 2200);
      } else {
        var id = Pollings.insert(newPoll);
        if (id) {

          Router.go('telescopePollDetail', {id: id});
        }
      }
    }


  }
});
