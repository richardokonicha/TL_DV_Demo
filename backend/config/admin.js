module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '77705d0dffe561b2f5a593d26827b29b'),
  },
});
