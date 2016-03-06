exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('recipes').del(),
    knex('instructions').del(),
    knex('ingredients').del()
  );
};
