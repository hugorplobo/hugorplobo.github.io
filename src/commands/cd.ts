import Alpine from "alpinejs";
import path from "path-browserify";
import { fileSystem } from "../fileSystem";
import { Command } from "../types";

export const cd: Command = {
    name: "cd",
    handler: (params: string[]) => {
        const store = Alpine.store("data") as { dir: string };
        const targetPath = params[0];
        const targetDir = path.normalize(path.join(store.dir, targetPath));
        const pathComponents = targetDir.split("/");
        pathComponents.shift();
        let currentDir = fileSystem["home"];

        for (const path of pathComponents) {
            if (currentDir.type === "file") {
                return `cd: not a directory: ${targetPath}`;
            }

            currentDir = currentDir.children[path as keyof typeof currentDir];

            if (!currentDir) {
                return `cd: no such file or directory: ${targetPath}`;
            }
        }

        if (currentDir.type === "file") {
            return `cd: not a directory: ${targetPath}`;
        }

        store.dir = targetDir;
        return "";
    },
}