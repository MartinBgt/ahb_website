import {Outlet} from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from "../navigation/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};
export default MainLayout;