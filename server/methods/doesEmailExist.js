Meteor.methods({
  doesEmailExist: (email) => {
    check(email, String);
    return Accounts.findUserByEmail(email) ? true : false;
  }
});
