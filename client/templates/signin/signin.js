import { Meteor } from 'meteor/meteor'

Meteor.subscribe("userData");

Template.signin.events({
    'submit form': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        console.log(email);
         Meteor.loginWithPassword(email, password, function(res){
             console.log(res)
             FlowRouter.go('/');
         });
    }
});