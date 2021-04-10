import path from "path";
import "./src/env";

export default {
  [process.env.NODE_ENV!]: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
    },
    migrations: {
      directory: path.join("./src", "migrations"),
      tableName: "migrations",
    },
  },
};
