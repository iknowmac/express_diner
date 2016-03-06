var bookshelf = helper('bookshelf');

var Recipe = bookshelf.Model.extend({
  tableName: 'recipes',
  hasTimestamps: true
});

var Recipes = bookshelf.Collection.extend({
  model: Recipe
});

module.exports = Recipe;
module.exports = Recipes;