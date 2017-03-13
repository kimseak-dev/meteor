import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import {FS} from 'fs';
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
    var users = Meteor.users.find().fetch();
    _.each(users, function(userData){
        if(userData.emails[0].address === 'kimseakphon@2ntkh.com'){
            Roles.addUsersToRoles(userData, ['admin']);
        }
    })

});
