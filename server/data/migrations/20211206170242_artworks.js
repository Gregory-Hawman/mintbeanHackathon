
exports.up = function(knex) {
    return knex.schema
        .createTable('users', users => {
            users.increments();
            users.string('username', 255).notNullable().unique();
            users.string('email', 255).notNullable().unique();
            users.string('password', 255).notNullable();
    })
    .createTable('artworks', artworks => {
        artworks.increments();
        artworks.string('name', 255).notNullable();
        artworks.string('imgLocation', 255).notNullable();
        artworks.integer('users_id').unsigned().notNullable().references('id').inTable('users').onUpdate('CASCADE').onDelete('RESTRICT');
    })
};

exports.down = function(knex) {
  
};
