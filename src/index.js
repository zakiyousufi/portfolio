import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import 'bootstrap/dist/js/bootstrap.js';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
