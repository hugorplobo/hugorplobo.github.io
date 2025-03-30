import { FileSystem } from "./types";

export const fileSystem: FileSystem = {
    "home": {
        type: "folder",
        children: {
            "downloads": {
                type: "folder",
                children: {},
            },
            "todos.txt": {
                type: "file",
                content: "- abrir pacotinho\n- tirar uma carta dourada\n- mandar print no grupo",
            },
        },
    },
};