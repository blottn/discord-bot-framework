export interface Config {
    botName: string,
}

export var defaultConfig: Config = {
    botName: "Archie"
};

export function LoadConfig(path: string): Config {
    try {
        var readIn = JSON.parse(Deno.readTextFileSync(path)) as Config;
        return {...defaultConfig, ...readIn};
    } catch (error) {
        if (error instanceof Deno.errors.NotFound) {
            // file or directory does not exist
            // return false;
            return defaultConfig;
        } else {
            // unexpected error, maybe permissions, pass it along
            throw error;
        }
    }
}
