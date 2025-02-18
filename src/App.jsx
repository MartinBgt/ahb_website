import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout.jsx';
import HomePage from './components/pages/HomePage.jsx';
import NotFoundPage from './components/pages/NotFoundPage.jsx';
import MastersPage from "./components/pages/MastersPage.jsx";
import NewsPage from "./components/pages/NewsPage.jsx";
import CompetitionsPage from "./components/pages/CompetitionsPage.jsx";
import ShopPage from "./components/pages/ShopPage.jsx";
import JoinUsPage from "./components/pages/JoinUsPage.jsx";
import ChevaignePage from "./components/pages/ChevaignePage.jsx";
import SaintGregoirePage from "./components/pages/SaintGregoirePage.jsx";
import SaulnieresPage from "./components/pages/SaulnieresPage.jsx";

const App = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path='/chevaigne' element={<ChevaignePage/>}/>
                <Route path='/saint-gregoire' element={<SaintGregoirePage/>}/>
                <Route path='/saulnieres' element={<SaulnieresPage/>}/>
                <Route path='/enseignants' element={<MastersPage/>}/>
                <Route path='/actualités' element={<NewsPage/>}/>
                <Route path='/compétitions' element={<CompetitionsPage/>}/>
                <Route path='/boutique' element={<ShopPage/>}/>
                <Route path='/nous-rejoindre' element={<JoinUsPage/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        )
    );

    return <RouterProvider router={router}/>;
}

export default App
