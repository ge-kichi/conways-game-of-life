const { defineConfig } = require("@vue/cli-service");
const { name } = require("./package.json");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? `/${name}/` : "/",
});
