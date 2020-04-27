import Navbar from "./Navbar";
import {
    AppBar,
    Toolbar,
  } from "@material-ui/core";

const MainLayout = (props) => (
    <>
        <Navbar toggleTheme={props.toggleTheme} darkMode={props.darkMode}/>
        {/* <Toolbar></Toolbar> */}
        {props.children}
    </>
);

export default MainLayout;