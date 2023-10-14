import { ContactSection } from "./sections/contact";
import { ExperienceSection } from "./sections/experiences";
import { InitialSection } from "./sections/initial";
import { ProjectsSection } from "./sections/projects";
import { SkillsSection } from "./sections/skills";

function App() {
  return (
    <>
      <InitialSection />      
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

export default App;
