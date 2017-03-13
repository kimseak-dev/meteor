Category = new Mongo.Collection('category');

Category.before.insert(function (userId, doc) {
    doc.createAt = Date.now();
    doc.rating = 0;
})