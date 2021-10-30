import { Plugin } from "../core/plugin.ts";
import { ImportFrom } from "./importer.ts";

const configPath = "./plugins.json";

// Read initial config to load
let plugins = ImportFrom(configPath);

console.log(plugins);
