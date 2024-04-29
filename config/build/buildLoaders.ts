import webpack from "webpack";

// функция подключения загрузчиков (loaders) в webpack.config
export const buildLoaders = (): webpack.RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };
 return [
   typescriptLoader
 ];
};