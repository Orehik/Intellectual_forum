import webpack from "webpack";

// функция подключения используемых разрешений модулей в webpack.config
export const buildResolvers = (): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  };
};