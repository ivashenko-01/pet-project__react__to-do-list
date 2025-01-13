import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Page__Example } from '@a2-pages/index';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Page__Example />} />
            </Routes>
        </BrowserRouter>
    );
};
