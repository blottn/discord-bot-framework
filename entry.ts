import { LoadConfig } from "./config.ts";

const conf = LoadConfig("./config.json");

console.log(conf);

/*
const p = Deno.run({
  cmd: ["echo", "hello"],
});*/
