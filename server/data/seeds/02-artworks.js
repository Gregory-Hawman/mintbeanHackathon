exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('artworks').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('artworks').insert([
          { id: 1, name: 'Test1', img: 'test123@email.com', users_id: 1 },
          { id: 2, name: 'Test2', img: 'test456@email.com', users_id: 1 },
          { id: 3, name: 'Test3', img: 'test789@email.com', users_id: 1 },
          { id: 1, name: 'Test4', img: 'test123@email.com', users_id: 1 },
          { id: 2, name: 'Test5', img: 'test456@email.com', users_id: 1 },
          { id: 3, name: 'Test6', img: 'test789@email.com', users_id: 1 },
          { id: 1, name: 'Test7', img: 'test123@email.com', users_id: 1 },
          { id: 2, name: 'Test8', img: 'test456@email.com', users_id: 1 },
          { id: 3, name: 'Test9', img: 'test789@email.com', users_id: 1 }
        ]);
      });
  };