const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});



// module.exports = ({ env }) => ({
//   defaultConnection: 'default',
//   connections: {
//     default: {
//       connector: 'mongoose',
//       settings: {
//         uri: 'mongodb+srv://tl_dv:<password>@cluster0.wh1i9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });