import { Plugin } from "../core/plugin.ts";

export async function ImportFrom(file: string): Promise<Plugin[]> {
    let contents = Deno.readTextFileSync(file)
    let toImports = JSON.parse(contents) as string[];
    return Promise.all(toImports.map(toImport => import(toImport)));
}
