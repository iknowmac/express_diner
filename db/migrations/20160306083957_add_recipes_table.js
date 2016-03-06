exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function (table) {
    table.increments('id').unsigned().primary();
    table.string('title');
    table.string('slug').unique();
    table.text('description');
    table.integer('servings').unsigned();
    table.integer('prep_time').unsigned();
    table.integer('cook_time').unsigned();
    table.integer('passive_time').unsigned();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('recipes');
};
