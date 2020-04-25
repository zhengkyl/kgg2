import Navbar from "./Navbar";

const MainLayout = (props) => (
    <>
        <Navbar toggleTheme={props.toggleTheme} darkMode={props.darkMode}/>
        {props.children}
    </>
);

export default MainLayout;