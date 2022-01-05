module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-3-224-251-59.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd1ovn5ttaf506h'),
      user: env('DATABASE_USERNAME', 'bclyvyglxpaltu'),
      password: env('DATABASE_PASSWORD', '5a13ddb6b0460b92a64f3cb0b38c11a767dff1296ea923a6ae32d10a03e4a92b'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});
