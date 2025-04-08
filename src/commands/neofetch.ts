import { Command } from "../types";

const startTime = Date.now();

export const neofetch: Command = {
    name: "neofetch",
    handler: () => {
      const userAgent = navigator.userAgent;
      const platform = navigator.platform;
      const language = navigator.language;
      const logicalCores = navigator.hardwareConcurrency || "Unknown";
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;

      // Calcular uptime aproximado
      const uptimeMs = Date.now() - startTime;
      const uptimeSec = Math.floor(uptimeMs / 1000);
      const uptimeMin = Math.floor(uptimeSec / 60);

      const formattedUptime = `${uptimeMin}m ${uptimeSec % 60}s`;

      const osMatch = userAgent.match(/\(([^)]+)\)/);
      const osInfo = osMatch ? osMatch[1] : "Unknown OS";

      return  `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿    hugo@browser.local
⣿⣿⣿⣿⣿⣿⣿⡿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠛⢿⣿⣿⣿⣿⣿⣿⣿    ----------------------------
⣿⣿⣿⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣿⣿⣿    OS: ${osInfo}
⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣤⣦⠀⠀⠀⠘⣿⣿⣿⣿    Platform: ${platform}
⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣶⣿⣿⠏⠀⠀⠀⠀⠘⣿⣿⣿    Uptime: ${formattedUptime}
⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⣠⣴⣿⣿⣿⣿⣿⣥⣷⠇⠀⠀⠀⠀⢹⣿⣿    Language: ${language}
⣿⣿⡇⠀⠀⠀⠀⢀⣠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⢸⣿⣿    CPU Cores: ${logicalCores}
⣿⣿⣿⠀⠀⠀⠀⠀⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⣸⣿⣿    Shell: wolfsh 1.0.3
⣿⣿⣿⡆⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠉⠀⠀⠀⠀⢠⣿⣿⣿    Resolution: ${screenWidth}x${screenHeight}
⣿⣿⣿⣿⣄⣠⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡆⠀⠀⠀⢠⣿⣿⣿⣿    Terminal: hugorplobo.github.io
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡍⠀⢀⣴⣿⣿⣿⣿⣿    CPU: unknown
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⣿⣿⣿⣿    GPU: unknown
      `;
    },
}