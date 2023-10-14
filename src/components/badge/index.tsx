import classes from "./style.module.scss";

type Props = {
  title: string,
  icon: string,
  noBorder?: boolean
}

export function Badge({ title, icon, noBorder }: Props) {
  return (
    <div
      className={classes.badge}
      style={ noBorder ? { border: "none", padding: "0" } : {} }
    >
      <img
        src={`https://cdn.simpleicons.org/${icon}/3c84ff`}
        alt={`${title} icon`}
      />

      { title }
    </div>
  );
}