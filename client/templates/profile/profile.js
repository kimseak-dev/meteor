// Template.profile.events({
//     'change .myFileInput': function(event, template) {
//         var files = event.target.files;
//         for (var i = 0, ln = files.length; i < ln; i++) {
//             Files.insert(files[i], function (err, fileObj) {
//                 console.log(err)
//                 console.log(fileObj)
//             });
//         }
//     }
// });

Template.profile.events({
    'change .myFileInput': function (event, template) {
        FS.Utility.eachFile(event, function (file) {
            Images.insert(file, function (err, fileObj) {
                if (err) {
                    // handle error
                } else {
                    // handle success depending what you need to do
                    var userId = Meteor.userId();
                    console.log(userId);
                    var imagesURL = {
                        "profile.avatar": `/cfs/files/images/` + fileObj._id
                    };
                    Meteor.users.update(userId, {$set: imagesURL});
                }
            });
        });
    },
});