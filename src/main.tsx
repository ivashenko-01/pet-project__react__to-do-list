import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './a1-app/App';

import './a1-app/styles/library/blowout.css';
import './a1-app/styles/library/bear-framework.css';

import './a1-app/styles/variables/variables.css';
import './a1-app/styles/variables/font-size.css';
import './a1-app/styles/variables/color.css';

import './a1-app/styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
