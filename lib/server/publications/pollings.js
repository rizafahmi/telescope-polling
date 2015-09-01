Meteor.publish('pollings', function () {
  try {
    return Pollings.find();
  } catch (error) {
    console.log(error)
  }
  console.log(Pollings.find().fetch());

  return this.ready();

});
