// Bot.ts exports the basic type definition and classes for bots
import { Command } from "./command.ts";

type ID = string;

export interface Persister<T> {
    Persist(id: ID, obj: T): null;
    Get(id: ID): T | null; 
}

export interface Commander {
    Commands(): Command[]
}

export type Bot<T> = Persister<T> | Commander;
