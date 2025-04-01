import { Command } from "../types";

export const whoAmI: Command = {
    name: "whoami",
    handler: () => `hugo`,
};