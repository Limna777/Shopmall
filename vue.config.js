const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  lintOnSave: true,
  devServer: {
    host: "localhost",
    port: "8080",
    https: false,
    open: true,
    proxy: null
  },
  chainWebpack: config => {
    config.resolve.alias.set("assets", resolve("src/assets"));
    config.resolve.alias.set("common", resolve("src/common"));
    config.resolve.alias.set("views", resolve("src/views"));
    config.resolve.alias.set("components", resolve("src/components"));
    config.resolve.alias.set("network", resolve("src/network"));
  }
};
