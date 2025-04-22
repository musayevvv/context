import { BrowserRouter, Routes, Route } from 'react-router';
import Home from '../home/Home';
import Login from '../login/Login';
import Layout from '../layout/Layout';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
