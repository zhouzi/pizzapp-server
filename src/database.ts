import { Model } from "objection";
import Knex from "knex";

export const database = Knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  },
});

Model.knex(database);

export class PizzaModel extends Model {
  id!: number;
  name!: string;

  static get tableName() {
    return "pizzas";
  }

  static get idColumn() {
    return "id";
  }
}
