module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-172-219-6.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'dal52p1fetgm9i'),
      user: env('DATABASE_USERNAME', 'wrkurlevwbfrjp'),
      password: env('DATABASE_PASSWORD', 'e6b6ce4013f90163ad7182e949b66fd2ae649fed5733b754724b13ff77c2dfd9'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
