export type Prompt = {
    input: string,
    out: string,
    dir?: string,
};

export type Store = {
    prompts: Prompt[],
    dir: string,
};

export type Command = {
    name: string,
    handler: (params: string[]) => string,
};

export type FileSystem = {
    [key: string]: File | Folder,
}

type File = {
    type: "file",
    content: string,
};

type Folder = {
    type: "folder",
    children: FileSystem,
};