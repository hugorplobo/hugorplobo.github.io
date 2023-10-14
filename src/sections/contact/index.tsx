import { Badge } from "../../components/badge";
import { Container } from "../../components/container";
import { Link } from "../../components/link";
import classes from "./style.module.scss";

export function ContactSection() {
  return (
    <Container id="contact" title="Contact">
      <h3>You can reach me through the following methods:</h3>
      <div className={classes.contacts}>
        <Link
          href="mailto:hugorplobo@gmail.com"
          target="_blank"
        >
          <Badge icon="gmail" title="Gmail" noBorder />
        </Link>
        <Link
          href="https://t.me/hugorplobo"
          target="_blank"
        >
          <Badge icon="telegram" title="Telegram" noBorder />
        </Link>
        <Link
          href="https://discordapp.com/users/852250486145024021"
          target="_blank"
        >
          <Badge icon="discord" title="Discord" noBorder />
        </Link>
        <Link
          href="https://instagram.com/hugo.cpp"
          target="_blank"
        >
          <Badge icon="instagram" title="Instagram" noBorder />
        </Link>
        <Link
          href="https://linkedin.com/in/hugorplobo/"
          target="_blank"
        >
          <Badge icon="linkedin" title="Linkedin" noBorder />
        </Link>
      </div>
    </Container>
  );
}