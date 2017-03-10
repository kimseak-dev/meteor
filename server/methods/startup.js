import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

Meteor.startup(() => {
    Accounts.onCreateUser(function(options, user){
        if(!user.profile){
            user.profile = {};
        }
        user.profile.firstname = options.firstname;
        user.profile.lastname = options.lastname;
        user.profile.email = options.email;
        console.log(user);
        return user;
    });
});
