Router.route("pollingSubmit", {
  path: "/polling_submit",
  // subscriptions: function () {
  //   return Meteor.subscribe('pollings');
  // }
});

Router.route("telescopePolls", {
  path: "/polls",
  subscriptions: function () {
    return Meteor.subscribe('pollings');
  }
});

Router.route("telescopePollDetail", {
  path: "/poll/:id",
  subscriptions: function () {
    return Meteor.subscribe('pollingDetail', this.params.id);
  }
})
