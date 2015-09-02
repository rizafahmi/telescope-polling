Meteor.startup(function() {

  // if there are no polls available create sample data
  if (Pollings.find().count() === 0) {

    // create sample polls
    var samplePolls = [
      {
        question: 'Is Telescope awesome?',
        choices: [
          { text: 'Of course!', votes: 0 },
          { text: 'Eh', votes: 0 },
          { text: 'No. I like plain JS', votes: 0 }
        ]
      },
      {
        question: 'Do you want to use CitizenLab?',
        choices: [
          { text: '100% yes', votes: 0 },
          { text: '200% yes', votes: 0 },
          { text: '300% yes', votes: 0 }
        ]
      }
    ];

    // loop over each sample poll and insert into database
    _.each(samplePolls, function(poll) {
      Pollings.insert(poll);
    });

  }

});
