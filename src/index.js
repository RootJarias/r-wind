import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import routes from './router/routes';

// Global Style
import './index.css';

// Layouts
import L_BASE from './layouts/Base';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <L_BASE />
    <RouterProvider router={routes} />
  </React.StrictMode>
);
