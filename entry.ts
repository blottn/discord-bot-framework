import { LoadConfig } from "./core/config.ts";
import * as Bot from "./core/bot.ts";

const conf = LoadConfig("./config.json");

console.log(conf);

/*
const p = Deno.run({
  cmd: ["echo", "hello"],
});*/
