Template.telescopePollingSubmit.helpers({
  categories: function () {
    return Categories.find();
  }
});

Template.telescopePollingSubmit.events({
  'submit form': function (event) {
    event.preventDefault();

    var newPoll = {
      title: event.target.question.value,
      slug: Telescope.utils.slugify(event.target.question.value),
      body: event.target.body.value,
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

    var defaultProperties = {
      createdAt: new Date(),
      postedAt: new Date(),
      author: Users.getDisplayNameById(Meteor.userId()),
      voteCount: 0,
      upvotes: 0,
      downvotes: 0,
      commentCount: 0,
      clickCount: 0,
      viewCount: 0,
      baseScore: 0,
      score: 0,
      inactive: false,
      sticky: false,
      status: 2,
      userId: Meteor.userId()
    };

    newPoll = _.extend(defaultProperties, newPoll);


    if ( newPoll['category'] ) {
      existingPolling = Posts.findOne({category: newPoll['category'], choices:{'$exists': true}});

      if ( existingPolling ) {
        Messages.flash("Only one polling per category allowed. Going to the poll right now...", "error");
        Meteor.setTimeout( function () {
          console.log("Redirecting...");
          Router.go('post_page', {_id: existingPolling._id, slug: existingPolling.slug});
        }, 2200);
      } else {
        var id = Posts.insert(newPoll);
        if (id) {
          poll = Posts.findOne({_id: id});

          Router.go('post_page', {_id: poll._id, slug: poll.slug});
        }
      }
    }


  }
});
