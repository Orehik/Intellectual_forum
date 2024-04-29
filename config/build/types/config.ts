
export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}

// интерфейс динамической настройки среды и пути для сборки бандла
export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
}