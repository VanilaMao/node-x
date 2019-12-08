import * as Convict from 'convict';

//schema
const cof =  Convict({
    env: {
      doc: "The applicaton environment.",
      format: ["production", "development", "test"],
      default: "development",
      env: "NODE_ENV"
    },
    ip: {
      doc: "The IP address to bind.",
      format: "ipaddress",
      default: "127.0.0.1",
      env: "IP_ADDRESS"
    },
    port: {
      doc: "The port to bind.",
      format: "port",
      default: 0,
      env: "PORT"
    },
    database: {
      host: {
        default: "localhost:8091",
        env: "DB_HOST"
      },
      port: {
        default: 5432,
        env: "DB_PORT"
      },
      user: {
        default: "Administrator",
        env: "DB_USER"
      },
      password: {
        default: "password",
        env: "DB_PASSWORD"
      },
      db:{
          default: "default",
          env:"DB_DB"
      },
      type:{
          default: "postgres",
          env:"DB_TYPE"
      }
    }
  });
  export default cof;
  