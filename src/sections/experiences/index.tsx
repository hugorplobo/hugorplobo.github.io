import { Container } from "../../components/container";
import classes from "./style.module.scss";

export function ExperienceSection() {
  return (
    <Container id="experience" title="Experience">
      <div className={classes.experience}>
        <div>
          <h3>
            Front-end developer at Insight Data Science Lab
          </h3>
          <h5>
            January 2022 - January 2023
          </h5>
        </div>
        <p>
          The project aimed to develop a web application using React and  Typescript for SEFAZ
          (Secretariat of Finance) that would allow users to view and analyze the processes executed
          within the organization. During the internship, I worked on the front-end development of the 
          application, using Ant Design as the design system and consuming a REST API with SWR.
          The project also included a back-end developer and a designer.
        </p>
      </div>
    </Container>
  );
}