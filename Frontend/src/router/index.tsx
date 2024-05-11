/* eslint-disable @typescript-eslint/no-unused-vars */

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../pages/Home';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/history/:id" */}
            </Routes>
        </Router>
    );
}

export default AppRouter;