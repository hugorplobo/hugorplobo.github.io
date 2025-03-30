import Alpine from "alpinejs";
import { Command } from "../types";
import path from "path-browserify";
import { fileSystem } from "../fileSystem";

export const cat: Command = {
    name: "cat",
    handler: (params: string[]) => {
        const store = Alpine.store("data") as { dir: string };
        const targetPath = params[0];
        const targetDir = path.normalize(path.join(store.dir, targetPath));
        const pathComponents = targetDir.split("/");
        pathComponents.shift();
        let currentDir = fileSystem["home"];

        for (const path of pathComponents) {
            if (currentDir.type === "file") {
                return `cd: not a directory: ${path}`;
            }

            currentDir = currentDir.children[path as keyof typeof currentDir];

            if (!currentDir) {
                return `cd: no such file or directory: ${path}`;
            }
        }

        if (currentDir.type === "folder") {
            return `cat: src: is as directory`;
        }

        return currentDir.content;
    },
};