import { ReactNode } from "react";
import classes from "./style.module.scss";

type Props = {
  title: string,
  children: ReactNode,
}

export function Container({ title, children }: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.containerInner}>
        <h1>{ title }</h1>
        { children }
      </div>
    </div>
  );
}