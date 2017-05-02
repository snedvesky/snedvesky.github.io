//edited by Denise 4/29/17 1500
//added max/min to ingredient list
//removed unused vars ie:measurement and ingredient:name, quantity


var mongoose = require('mongoose');
var RecipeSchema = new mongoose.Schema({
    title: String,
    postedBy: String,
    ingredients: { type: Array, min: 3, max: 10 },
    direction: String


});

// return the model
module.exports = mongoose.model('Recipe', RecipeSchema);


