import Alpine from "alpinejs";
import { fileSystem } from "../fileSystem";
import { Command } from "../types";

export const ls: Command = {
    name: "ls",
    handler: () => {
        const { dir } = Alpine.store("data") as { dir: string };
        const pathComponents = dir.split("/");
        pathComponents.shift();
        let currentDir = fileSystem["home"];

        for (const path of pathComponents) {
            if (currentDir.type === "file") {
                return "invalid path";
            }

            currentDir = currentDir.children[path as keyof typeof currentDir];
        }

        if (currentDir.type === "file") {
            return "invalid path";
        }

        return Object.keys(currentDir.children).join(" ");
    }
};