const path = require("path");
const { resolve } = require("path");

function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/styles/global.less")],
    });
}

module.exports = {
  publicPath: "./",
  productionSourceMap: false,
  runtimeCompiler: true,
  chainWebpack: (config) => {
    // 设置less全局参数
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );

    const rawRule = config.module.rule("raw");
    rawRule
      .test(/\.txt$/i)
      .use("raw-loader")
      .loader("raw-loader")
      .end();

    const svgRule = config.module.rule("svg");
    svgRule.uses.clear(); // 清除已有的loader, 如果不这样做会添加在此loader之后
    svgRule.exclude.add(/node_modules/); // 正则匹配排除node_modules目录
    svgRule.include.add(resolve("src/assets/svg"));
    svgRule
      .test(/\.svg$/)
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]",
      });

    // 修改images loader 添加svg处理
    const imagesRule = config.module.rule("images");
    imagesRule.exclude.add(resolve("src/assets/svg"));
    config.module.rule("images").test(/\.(png|jpe?g|gif|svg)(\?.*)?$/);
  },
};
