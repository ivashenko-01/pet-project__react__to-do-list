import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Page__Example } from '@a2-pages/index';

import { PAGE_ROUTES } from '@a6-shared/consts';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={`${PAGE_ROUTES.main}`} element={<Page__Example />} />
            </Routes>
        </BrowserRouter>
    );
};
