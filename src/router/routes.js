// Base Imports
import { createBrowserRouter } from 'react-router-dom';
import meta from './meta';

// Pages
import HOME from '../pages/home/Home';
import ABOUT from '../pages/about/About';

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        {meta.home}

        <HOME />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        {meta.about}

        <ABOUT />
      </>
    ),
  },
]);

export default routes;
