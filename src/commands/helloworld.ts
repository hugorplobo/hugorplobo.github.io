import { Command } from "../types";

export const helloWorld: Command = {
    name: "hello",
    handler: () => "world!",
};