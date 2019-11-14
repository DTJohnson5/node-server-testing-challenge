
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("books")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("books").insert([
        {title: "A New Dawn", author: "John Jackson Miller"},
        {title: "Shadows of the Empire", author: "George Lucas"},
        {title: "the new jim crow", author: "michelle alexander"}
      ]);
    });
};
