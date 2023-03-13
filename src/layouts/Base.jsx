import { RouterProvider } from 'react-router-dom';
import routes from '../router/routes';

import CMP_SIDEMENU from '../components/sidemenu/Sidemenu';
import CMP_NAVBAR from '../components/navbar/Navbar';

const L_BASE = () => {
  return (
    <>
      <div className="flex">
        <CMP_SIDEMENU />

        <div className="block w-full">
          <CMP_NAVBAR />

          <div className="p-4">
            <RouterProvider router={routes} />
          </div>
        </div>
      </div>
    </>
  );
};

export default L_BASE;
