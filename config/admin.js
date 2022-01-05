module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c74893ad022f35f4b843b8785c52f0c1'),
  },
});
