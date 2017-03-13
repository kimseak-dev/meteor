// /**
//  * Created by acer on 3/13/2017.
//  */
// var imageStore = new FS.Store.FileSystem("files", {
//     path: "C:\\Users\\acer\\quietearth\\public\\images", //optional, default is "/akm/files" path within app container
//     maxTries: 1 //optional, default 5
// });
// this.Files = new FS.Collection("files", {
//     stores: [imageStore]
// });
//
// this.Files.userCanInsert = function(userId, doc) {
//     return true;
// };
//
// this.Files.userCanUpdate = function(userId, doc) {
//     return true;
// };
//
// this.Files.userCanRemove = function(userId, doc) {
//     return true;
// };
//
// this.Files.userCanDownload = function(userId, doc) {
//     return true;
// };
// this.Files.allow({
//     download:function(){
//         return true;
//     },
//     insert:function(){
//         return true;
//     }
// })