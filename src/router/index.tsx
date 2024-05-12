/* eslint-disable @typescript-eslint/no-unused-vars */

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
import SummaryDisplay from '../components/SummaryDisplay';
import { HomeProvider } from '../providers/HomeProvider';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeProvider/>}>
                    <Route index element={<Home />} />
                    <Route path="/article/:id" element={<SummaryDisplay />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;