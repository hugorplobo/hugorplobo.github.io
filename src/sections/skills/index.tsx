import { Badge } from "../../components/badge";
import { Container } from "../../components/container";
import classes from "./style.module.scss";

export function SkillsSection() {
  return (
    <Container id="skills" title="Skills">
      <div className={classes.section}>
        <h3>Languages</h3>
        <div className={classes.badges}>
          <Badge title="HTML" icon="html5" />
          <Badge title="CSS" icon="css3" />
          <Badge title="Javascript" icon="javascript" />
          <Badge title="Typescript" icon="typescript" />
          <Badge title="C++" icon="c++" />
          <Badge title="Python" icon="python" />
        </div>
      </div>
      <div className={classes.section}>
        <h3>Libraries</h3>
        <div className={classes.badges}>
          <Badge title="React" icon="react" />
          <Badge title="Vue" icon="vue.js" />
          <Badge title="Express" icon="express" />
          <Badge title="Fastify" icon="fastify" />
          <Badge title="Nest" icon="nestjs" />
          <Badge title="Prisma" icon="prisma" />
        </div>
      </div>
      <div className={classes.section}>
        <h3>Tools</h3>
        <div className={classes.badges}>
          <Badge title="Git" icon="git" />
          <Badge title="PostgreSQL" icon="postgresql" />
          <Badge title="Redis" icon="redis" />
          <Badge title="Docker" icon="docker" />
        </div>
      </div>
    </Container>
  );
}