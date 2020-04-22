import Navbar from "./Navbar";
import Head from "next/head"

const MainLayout = props => (
    <div>
        <Head>
            <title>{props.title}</title>
        </Head>
        <Navbar/>
        {props.children}
    </div>
);

export default MainLayout;