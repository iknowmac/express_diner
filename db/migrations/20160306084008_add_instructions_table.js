exports.up = function(knex, Promise) {
  return knex.schema.createTable('instructions', function (table) {
    table.increments('id').unsigned().primary();
    table.integer('recipe_id').unsigned().references('recipes.id');
    table.text('description');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('instructions');
};
