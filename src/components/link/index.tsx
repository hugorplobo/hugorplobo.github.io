import { AnchorHTMLAttributes, ReactNode } from "react";
import classes from "./style.module.scss";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
};

export function Link(props: Props) {
  return (
    <a { ...props } className={classes.link}>
      { props.children }
    </a>
  );
}