import { FileSystem } from "./types";

export const fileSystem: FileSystem = {
    "home": {
        type: "folder",
        children: {
            "downloads": {
                type: "folder",
                children: {},
            },
            "commands.txt": {
                type: "file",
                content: `beware, this is not a bash of something like that, so keep the 'ls should take a parameter' to yourself okay?
                
                - hello: what type of programmer would i be without this?
                - clear: delete the old commands, you should know that
                - whoami: self-explanatory don't you think? :D
                - cat: prints the content of a file, meow
                - cd: moves to a directory, you can use '..' to go back while time travel is not an option
                - ls: shows the content of the current directory, since i'm lazy all the files have extensions so you don't get confused
                `,
            },
        },
    },
};