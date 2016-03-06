var bookshelf = helper('bookshelf');

var Instruction = bookshelf.Model.extend({
  tableName: 'instructions',
  recipe: function () {
    return this.belongsTo(Recipe);
  }
});

var Instructions = bookshelf.Collection.extend({
  model: Instruction
});

module.exports = Instruction;
module.exports = Instructions;