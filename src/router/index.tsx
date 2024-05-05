import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import URLSubmitter from '../components/URLSubmitter';
const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<URLSubmitter />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;