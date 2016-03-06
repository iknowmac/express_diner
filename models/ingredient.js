var bookshelf = helper('bookshelf');

var Ingredient = bookshelf.Model.extend({
  tableName: 'ingredients',
  recipe: function () {
    return this.belongsTo(Recipe);
  }
});

var Ingredients = bookshelf.Collection.extend({
  model: Ingredient
});

module.exports = Ingredient;
module.exports = Ingredients;
