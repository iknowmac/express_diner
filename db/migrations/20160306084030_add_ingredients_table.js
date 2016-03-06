exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('recipe_id').unsigned().references('recipes.id');
    table.string('title');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ingredients');
};
