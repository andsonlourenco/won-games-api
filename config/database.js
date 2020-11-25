module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '172.17.0.2'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'wongames'),
        username: env('DATABASE_USERNAME', 'wongames'),
        password: env('DATABASE_PASSWORD', 'wongames123'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
