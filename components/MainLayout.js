import Navbar from "./Navbar";

const MainLayout = props => (
    <div>
        <Navbar/>
        {props.children}
    </div>
);

export default MainLayout;