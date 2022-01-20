export default function (server) {
  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
  // server.createList('post', 10);
  server.create('movie', {
    title: 'The Shawshank Redemption',
    year: 1994,
  });
  server.create('movie', {
    title: 'The Godfather',
    year: 1972,
  });
  server.create('movie', {
    title: 'The Godfather: Part II',
    year: 1974,
  });

  server.create('movie', {
    title: 'The Dark Knight',
    year: 2008,
  });
  server.create('movie', {
    title: '12 Angry Men',
    year: 1957,
  });
}
