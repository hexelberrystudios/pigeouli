// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'pigeouli',
      user:     'root',
      password: 'gamera'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'pigeouli',
      user:     'root',
      password: 'gamera'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'pigeouli',
      user:     'root',
      password: 'gamera'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
