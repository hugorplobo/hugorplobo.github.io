import { ReactNode } from "react";
import classes from "./style.module.scss";

type Props = {
  id: string,
  title: string,
  children: ReactNode,
}

export function Container({ id, title, children }: Props) {
  return (
    <div className={classes.container}>
      <div className={classes.containerInner}>
        <h1 id={id}><span>{ title }</span></h1>
        { children }
      </div>
    </div>
  );
}