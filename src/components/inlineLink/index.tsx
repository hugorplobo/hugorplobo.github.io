import { AnchorHTMLAttributes } from "react";
import classes from "./style.module.scss";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  text: string,
}

export function InlineLink(props: Props) {
  return (
    <a {...props} className={classes.link} target="_blank">
      { props.text }
    </a>
  );
}