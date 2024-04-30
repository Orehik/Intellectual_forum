import webpack from "webpack";

// функция подключения загрузчиков (loaders) в webpack.config
export const buildLoaders = (): webpack.RuleSetRule[] => {

  const cssLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
      ],
    };

  // если не использовать typescript нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

 return [
   typescriptLoader,
   cssLoader,
 ];
};