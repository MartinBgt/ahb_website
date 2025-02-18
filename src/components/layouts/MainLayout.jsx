import {Outlet} from 'react-router-dom';
import NavBar from '../navigation/NavBar';
import Footer from "../navigation/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    );
};
export default MainLayout;