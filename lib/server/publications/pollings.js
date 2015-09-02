Meteor.publish('pollings', function () {
  try {
    return Pollings.find();
  } catch (error) {
    console.log(error)
  }

  return this.ready();

});

Pollings.allow({
  'insert': function (userId, doc) {
    return true;
  },
  'update': function (userId, doc) {
    return true;
  }
})
