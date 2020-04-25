import Link from "next/link";
import SunIcon from "@material-ui/icons/Brightness5";
import MoonIcon from "@material-ui/icons/NightsStay";
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import kggLogo from "/img/kgg_black.png";
import AnimatedMenuIcon from "./AnimatedMenuIcon";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 100,
  },
  appBar: {
    zIndex: 1400,
  },
  drawer: {},
  list: {
    width: 250,
  },
  listItem: {
    paddingLeft: 36,
    paddingRight: 36,
  },
  listText: {
    fontSize: `2rem`,
  },
  toolbar: {
    //   padding:0,
  },
  logo: {
    height: 20,
    width: `auto`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
}));

const pages = [
  // { title: 'Home', path: '/'},
  { title: "News", path: "/news" },
  { title: "Blog", path: "/blog" },
  { title: "Social", path: "/social" },
  { title: "Store", path: "/store" },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <List className={classes.list}>
      {pages.map((page) => (
        <Link href={page.path}>
          <ListItem button key={page.title} className={classes.listItem}>
            <ListItemText className={classes.listText}>
              {page.title}
              {/* <a title={page.title}>{page.title}</a> */}
            </ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar elevation={1} position="fixed" color="default" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <IconButton onClick={toggleDrawer(!open)} edge="start">
              <AnimatedMenuIcon open={open}></AnimatedMenuIcon>
            </IconButton>
            {props.darkMode ? (
              <img src="/img/kgg_white.png" className={classes.logo} />
            ) : (
              <img src="/img/kgg_black.png" className={classes.logo} />
            )}
            <IconButton onClick={props.toggleTheme}>
              {props.darkMode ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Drawer
        className={classes.drawer}
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </>
  );
}
