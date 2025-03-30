import Alpine from "alpinejs";
import { Command, Prompt } from "../types";

export const clear: Command = {
    name: "clear",
    handler: () => {
        const store = Alpine.store("data") as { prompts: Prompt[] };
        store.prompts = [];
        return "";
    },
};