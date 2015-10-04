Router.onBeforeAction(function () {
    if(!this.ready()) return;
    if(Users) {
      if(!Users.is.admin()){
        this.render('no_rights');
      } else {
        this.next();
      }
    }
}, {only: ['pollingSubmit']});

Router.route("pollingSubmit", {
  path: "/polling_submit",
  subscriptions: function () {
    return Meteor.subscribe('pollings');
  }
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
