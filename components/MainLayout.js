import Navbar from "./Navbar";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme)=>{
    
})

const MainLayout = (props) => (
    <>
        <Navbar toggleTheme={props.toggleTheme} darkMode={props.darkMode}/>
        {props.children}
    </>
);

export default MainLayout;