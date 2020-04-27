import Link from "next/link";
import { useRouter } from 'next/router'
import SunIcon from "@material-ui/icons/Brightness5";
import MoonIcon from "@material-ui/icons/NightsStay";
import {
  AppBar,
  Drawer,
  Divider,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  Slide,
  useScrollTrigger,
  Typography,
  Hidden,
} from "@material-ui/core";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedMenuIcon from "./AnimatedMenuIcon";
import KggLogo from "../public/img/kgg_logo.svg";
import clsx from 'clsx'
const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: 1400,
  },
  drawer: {},
  list: {
    padding: 0,
    display: "inline-block",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  listItem: {
    paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      cursor: "pointer",
      width: "initial",
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      paddingTop: 0,
      paddingBottom: 0,
      
    },
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(3),
      marginLeft: theme.spacing(3),
    },
  },
  logo: {
    height: 20,
    width: `auto`,
    position: `absolute`,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    fill: theme.palette.text.primary,
    [theme.breakpoints.up("sm")]: {
      left: 0,
      transform: 'translate(50%, -50%)',
    },
  },
  link: {
    fontSize:'1.25rem',
    fontWeight:300,
    color: "black",
    height: "100%",
    textDecoration: `none`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    "&:hover": {
      color: `${theme.palette.text.secondary}`
    },
    "&:visited": {
      color: "inherit",
    },
    "&:active": {
      color: "inherit",
    },
  },
  activeLink: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,

  },
  toolbar: {
    flexDirection: "row-reverse",
    alignItems: 'stretch',
  },
  icon: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  iconButton:{
    marginTop:'auto',
    marginBottom:'auto',
  },
  divider: {
    margin: `${theme.spacing(1)}px 0`,
  }
}));

const pages = [
  { title: 'About', path: '/'},
  { title: "News", path: "/news" },
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
  const router=useRouter();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(open);
  };

  const mobileList = () => (
    <List className={classes.list}>
      {pages.map((page) => (
        <Link href={page.path}>
          <ListItem button key={page.title} className={classes.listItem}>
            <Typography variant="h5" component="a">
              {page.title}
            </Typography>
          </ListItem>
        </Link>
      ))}
      <Divider className={classes.divider}/>
      <ListItem button key="toggle-dark" onClick={props.toggleTheme}>
        <Typography variant="subtitle1">
          {props.darkMode ? "Dark Mode" : "Light Mode"}
        </Typography>
        <ListItemIcon className={classes.icon}>
          {props.darkMode ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
        </ListItemIcon>
      </ListItem>
    </List>
  );
  const desktopList = () => (
    <List className={classes.list}>
      {pages.map((page) => (
        <ListItem key={page.title} className={classes.listItem}>
          <Link href={page.path}>
            <a title={page.title} className={clsx(classes.link, router.pathname === page.path && classes.activeLink)}>
              {page.title}
            </a>
          </Link>
        </ListItem>
      ))}
        <IconButton onClick={props.toggleTheme} edge="end" className={classes.iconButton}>
          {props.darkMode ? <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
        </IconButton>
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
            <Hidden smUp>
              <IconButton onClick={toggleDrawer(!open)} edge="end" className={classes.iconButton}>
                <AnimatedMenuIcon open={open} ></AnimatedMenuIcon>
              </IconButton>
            </Hidden>
            <Hidden xsDown>{desktopList()}</Hidden>
            <KggLogo className={classes.logo} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Hidden smUp>
        <Drawer
          className={classes.drawer}
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
        >
          <Toolbar />
          {mobileList()}
        </Drawer>
      </Hidden>

      {/* Spacing element to pad top of page with height of appbar */}
      <Toolbar></Toolbar>
    </>
  );
}
