import classes from "./style.module.scss";

type Props = {
  title: string,
  icon: string
}

export function Badge({ title, icon }: Props) {
  return (
    <div className={classes.badge}>
      <img
        src={`https://cdn.simpleicons.org/${icon}/3c84ff`}
        alt={`${title} icon`}
      />

      { title }
    </div>
  );
}