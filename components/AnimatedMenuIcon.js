import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

/*
 This is an animated Hamburger Menu Icon. Yes, it is completely hardcoded
 and only works at this specific size. But it looks pretty damn good.
 */

const useStyles = makeStyles((theme) => ({
  bar: {
    width: 25,
    height: 3,
    backgroundColor: theme.palette.text.primary,
    marginTop: 4,
    marginBottom: 4,
    transition: `0.225s`,
  },
  bar1: {
    WebkitTransform: `translate(0,7px) rotate(45deg)`,
    transform: `translate(0,7px) rotate(45deg)`,
  },
  bar2: {
    opacity: 0,
  },
  bar3: {
    WebkitTransform: `translate(0,-7px) rotate(-45deg)`,
    transform: `translate(0,-7px) rotate(-45deg)`,
  },
}));

export default function AnimatedMenuIcon({ open }) {
  const classes = useStyles();
  return (
    <div>
      <div className={clsx(classes.bar, open && classes.bar1)}></div>
      <div className={clsx(classes.bar, open && classes.bar2)}></div>
      <div className={clsx(classes.bar, open && classes.bar3)}></div>
    </div>
  );
}
