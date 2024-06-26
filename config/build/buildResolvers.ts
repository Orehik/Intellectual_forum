import webpack from "webpack";
import { BuildOptions } from "./types/config";

// функция подключения используемых разрешений модулей в webpack.config
export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    alias: {}
  };
};