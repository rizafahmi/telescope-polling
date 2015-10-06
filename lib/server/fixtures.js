Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Posts.find({choices: {$exists: true}}).count() === 0) {

    var defaultProperties = {
      createdAt: new Date(),
      postedAt: new Date(),
      author: 'riza',
      upvotes: 0,
      downvotes: 0,
      commentCount: 0,
      clickCount: 0,
      viewCount: 0,
      baseScore: 0,
      score: 0,
      inactive: false,
      sticky: false,
      status: 1,
      userId: "59As5NCzNPK5HZLQK",
      //typePost: 'poll'
    };


    // create sample polls

    var samplePolls = [
      {
        title: 'Is Telescope awesome?',
        choices: [
          { text: 'Of course!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'No. I like plain JS', votes: 0 }
        ]
      },
      {
        title: 'Do you want to use CitizenLab?',
        choices: [
          { text: '100% yes', votes: 0 },
          { text: '200% yes', votes: 0 },
          { text: '300% yes', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      newPoll = _.extend(defaultProperties, poll);
      check(newPoll, Posts.simpleSchema());
      Posts.submit(newPoll);
    });
    

  }

});
