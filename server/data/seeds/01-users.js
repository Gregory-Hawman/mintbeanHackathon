const bcrypt = require('bcryptjs');
const { rounds } = require('../../api/vars')

const password_1 = bcrypt.hashSync('test123', rounds)
const password_2 = bcrypt.hashSync('test456', rounds)
const password_3 = bcrypt.hashSync('test789', rounds)

exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('users').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('users').insert([
          { id: 1, username: 'Test123', email: 'test123@email.com', password: password_1 },
          { id: 2, username: 'Test456', email: 'test456@email.com', password: password_2 },
          { id: 3, username: 'Test789', email: 'test789@email.com', password: password_3 }
        ]);
      });
  };