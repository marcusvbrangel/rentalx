import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
}

const connectionOptions = getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = 'rentalxdb'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
  createConnection({
    ...options,
  });
});

module.exports = connectionOptions;


// import { Category } from "../modules/cars/entities/Category";

// interface IOptions {
//   host: string;
// }

// getConnectionOptions()

//   .then((options) => {

//     const newOptions = options as IOptions;

//     newOptions.host = "rentalxdb";

//     createConnection({
//       // ...options,
//       type: "postgres",
//       host: "0.0.0.0",
//       port: 5432,
//       username: "app",
//       password: "1234",
//       database: "rentalx",
//       entities: [
//         Category
//     ],
//     synchronize: true,
//     logging: false
//     });

//   });

