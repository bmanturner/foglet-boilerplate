Meteor.methods({
  doesUsernameExist: (username) => {
    check(username, String);
    return Accounts.findUserByUsername(username) ? true : false;
  }
});
