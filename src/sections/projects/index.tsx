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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati autem omnis ad, repellat eius nulla mollitia voluptate ducimus, quidem amet et minima nisi, repudiandae cumque veniam! Tenetur, unde pariatur?
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti obcaecati autem omnis ad, repellat eius nulla mollitia voluptate ducimus, quidem amet et minima nisi, repudiandae cumque veniam! Tenetur, unde pariatur?
        </p>
      </div>
    </Container>
  );
}