import { Container } from "../../components/container";
import { Link } from "../../components/link";
import { Player } from "../../components/player";
import classes from "./style.module.scss";

export function InitialSection() {
  return (
    <Container id="initial" title="I'm Hugo">
      <div className={classes.info}>
        <img
          className={classes.avatar}
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85295bae-9e0c-49fb-9b7a-ff8e231806f4/ddy85cl-18ad8a23-5134-462e-9cb1-2e988c94050c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg1Mjk1YmFlLTllMGMtNDlmYi05YjdhLWZmOGUyMzE4MDZmNFwvZGR5ODVjbC0xOGFkOGEyMy01MTM0LTQ2MmUtOWNiMS0yZTk4OGM5NDA1MGMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ucMow4JR8oG8pS4MR7r1UpNLbGAJdd7H7sdh5w-pSjo"
          alt="Avatat GIF"
        />
        
        <h2>A software engineer and web developer</h2>
        <p>Welcome to my personal webpage!</p>
        <p>I'm 20 years old, I'm from Ceará, Brazil and currently taking a software engineering degree at the Federal University of Ceara (UFC).</p>
        <p>I love to learn about new things and try to build cool projects in my free time :D</p>
      </div>

      <Player />

      <div className={classes.links}>
        <Link href="#skills">Skills</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
        <Link href="#resume">Resume</Link>
      </div>
    </Container>
  );
}