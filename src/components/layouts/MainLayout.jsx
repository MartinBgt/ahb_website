import {Outlet} from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Footer from '../navigation/Footer.jsx';
import ScrollToTop from '../navigation/ScrollToTop'; // Import du composant

const MainLayout = () => {
    return (
        <>
            <ScrollToTop/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainLayout;
