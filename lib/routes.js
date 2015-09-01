Router.route("pollingSubmit", {
  path: "/polling_submit",
  subscriptions: function () {
    return Meteor.subscribe('pollings');
  }
});
