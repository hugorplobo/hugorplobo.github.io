import { Badge } from "../../components/badge";
import { Container } from "../../components/container";
import { InlineLink } from "../../components/inlineLink";
import classes from "./style.module.scss";

export function ProjectsSection() {
  return (
    <Container id="projects" title="Projects">
      <div className={classes.project}>
        <h3>Skin Guesser</h3>
        <div className={classes.info}>
          <Badge title="Rust" icon="rust" />
          <Badge title="Typescript" icon="typescript" />
          <Badge title="React" icon="react" />
          <Badge title="Tailwind" icon="tailwindcss" />
          <Badge title="PostgreSQL" icon="postgresql" />
          <Badge title="Docker" icon="docker" />
        </div>
        <p>
          A daily challenge featuring League of Legends champions' skins. 
          The images start off pixelated and become clearer with each incorrect guess,
          up to a maximum of 5 attempts. You can check the game <InlineLink text="here" href="https://skin-guesser.netlify.app/" />,
          the front end repository <InlineLink text="here" href="https://github.com/hugorplobo/skin-guesser-front/"/> and
          the back end repository <InlineLink text="here" href="https://github.com/hugorplobo/skin-guesser-back/" />.
        </p>
      </div>
      <div className={classes.project}>
        <h3>RU Telegram Bot</h3>
        <div className={classes.info}>
          <Badge title="Typescript" icon="typescript" />
          <Badge title="SQLite" icon="sqlite" />
          <Badge title="Docker" icon="docker" />
        </div>
        <p>
          A Telegram bot that daily notifies the menu of the university restaurant (RU)
          on my campus and keeps you informed about how many credits you have.
          It is based on web scraping for the daily menu collection and user information retrieval.
          You can check the repository <InlineLink text="here" href="https://github.com/hugorplobo/ru-telegram-bot" /> and
          check it online on telegram <InlineLink text="here" href="https://t.me/ruqxdbot" />.
        </p>
      </div>
      <div className={classes.project}>
        <h3>Kumo Bot</h3>
        <div className={classes.info}>
          <Badge title="Rust" icon="rust" />
          <Badge title="Preact" icon="preact" />
          <Badge title="PostgreSQL" icon="postgresql" />
          <Badge title="Docker" icon="docker" />
        </div>
        <p>
          A Telegram bot to save your files quickly and easily, and access them from any chat.
          The files are saved on Telegram servers, and their IDs are managed by the bot.
          When requested by the user, the file is forwarded using the Telegram API.
          It also uses Preact to display a web interface integrated into the application for file viewing.
          You can check the repositories for the <InlineLink text="bot" href="https://github.com/hugorplobo/kumo-bot/" />,
          the <InlineLink text="API" href="https://github.com/hugorplobo/kumo-api" /> and
          the <InlineLink text="web app" href="https://github.com/hugorplobo/kumo-web" />. He's also
          online and you can talk with him <InlineLink text="here" href="https://t.me/kumoo_bot" />.
        </p>
      </div>
    </Container>
  );
}