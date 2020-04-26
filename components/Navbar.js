import Link from "next/link";
import SunIcon from "@material-ui/icons/Brightness5";
import MoonIcon from "@material-ui/icons/NightsStay";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Slide,
  useScrollTrigger,
  Typography,
  Hidden,
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
  list: {padding:0},
  listItem: {
    // flexDirection:'row',
    // paddingLeft: 36,
    // paddingRight: 36,
    // paddingTop:16,
    // paddingBottom:16,
    // textAlign:'center',
    // width:'120px',
    [theme.breakpoints.up('md')]:{
      display: "inline-block",
      cursor: "pointer",
      width: "initial",
      paddingTop:16,
      paddingBottom:16,
    }
  },
  // listText: {
  //   fontSize: `2rem`,
  // },
  logo: {
    height: 20,
    width: `auto`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  },
  link: {
    color: "black",
    height: "100%",
    textDecoration: `none`,
    "&:hover": {
      textDecoration: `underline`,
    },
    "&:visited": {
      color: "inherit",
    },
    "&:active": {
      color: "inherit",
    },
  },
  toolbar: {
    flexDirection:'row-reverse',
  }
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
            </ListItemText>
          </ListItem>
        </Link>
      ))}
    </List>
  );
  const list2 = () => (
    <List className={classes.list}>
      {pages.map((page) => (
        <ListItem key={page.title} className={classes.listItem}>
          <Link href={page.path}>
            <a title={page.title} className={classes.link}>
              {page.title}
            </a>
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          elevation={1}
          position="fixed"
          color="default"
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Hidden mdUp>
              <IconButton onClick={toggleDrawer(!open)} edge="start">
              <AnimatedMenuIcon open={open}></AnimatedMenuIcon>
            </IconButton>
            </Hidden>
            
            {props.darkMode ? (
              <img src="/img/kgg_white.png" className={classes.logo} />
            ) : (
              <img src="/img/kgg_black.png" className={classes.logo} />
            )}
            <IconButton onClick={props.toggleTheme}>
              {props.darkMode ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
            </IconButton>
            {/* {pages.map((page) => (
              <Link href={page.path}>
                <a title={page.title} className={classes.link}>
                  {page.title}
                </a>
              </Link>
            ))} */}
            <Hidden smDown>
              {list2()}
            </Hidden>
            
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Hidden mdUp>
        <Drawer
        className={classes.drawer}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
      </Hidden>
      
    </>
  );
}
