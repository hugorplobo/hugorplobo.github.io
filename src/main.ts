import "./style.css";
import Alpine from "alpinejs";
import { commands } from "./commands";
import { Store } from "./types";

function executeCommand(input: string): string {
  const commandName = input.split(" ")[0];

  for (const command of commands) {
    if (command.name == commandName) {
      return command.handler(input.split(" ").slice(1));
    }
  }

  return `command not found: ${commandName}`;
}

const store = {
  prompts: [
    { input: "", out: "" },
  ],
  dir: "home",

  init() {
    document.addEventListener("keydown", e => {
      if (!e.key) {
        return;
      }

      const lastPrompt = this.prompts[this.prompts.length - 1];

      if (e.key == "Enter") {
        lastPrompt.dir = this.dir;
        const res = executeCommand(lastPrompt.input);
        lastPrompt.out = res;
        this.prompts.push({ input: "", out: "" });
      } else if (e.key == "Backspace") {
        lastPrompt.input = lastPrompt.input.slice(0, lastPrompt.input.length - 1);
      } else if (e.key == "Meta") {
        console.log(this.prompts);
        console.log(this.dir);
      } else {
        lastPrompt.input += e.key;
      }
    });
  },
} as Store;

document.addEventListener("alpine:init", () => {
  Alpine.store("data", store);
});

Alpine.start();