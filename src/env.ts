if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  require("dotenv-expand")(require("dotenv").config());
}
