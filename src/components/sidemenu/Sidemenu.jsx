// Import Style
import './_this.css';

// Import Icons
import {
  HomeIcon,
  CodeBracketSquareIcon,
  WrenchIcon,
} from '@heroicons/react/24/solid';

// Import Assets
import IMG_WAVE from '../../assets/general/wave';

const CMP_SIDEMENU = () => {
  return (
    <>
      <div className="block h-screen w-80 bg-gray-100 drop-shadow-md border-r border-slate-300">
        <div className="h-[242px]">
          <div className="p-5 text-center text-2xl font-bold ">
            <img
              className="block m-auto h-[120px]"
              src={require('../../assets/main-logo.png')}
              alt="main-logo"
            />
            <span className="text-primary-800">R-Wind</span>
          </div>
          <div className="sidenav-wave mt-[-50px]">{IMG_WAVE}</div>
        </div>
        <ul className="pt-5 pb-5 pr-2 pl-2 h-[calc(100vh-242px)] overflow-auto">
          <li className="p-3 rounded-lg cursor-pointer font-medium ease-in-out duration-300 border border-transparent hover:bg-gray-200 focus:bg-primary-900">
            <div className="inline-flex">
              <HomeIcon className="h-5 inline mr-2" />
              <span>Home</span>
            </div>
          </li>
          <li className="p-3 rounded-lg cursor-pointer font-medium ease-in-out duration-300 border border-transparent hover:bg-gray-200 focus:bg-primary-900">
            <div className="inline-flex">
              <CodeBracketSquareIcon className="h-5 inline mr-2" />
              <span>Components</span>
            </div>
          </li>
          <li className="p-3 rounded-lg cursor-pointer font-medium ease-in-out duration-300 border border-transparent hover:bg-gray-200 focus:bg-primary-900">
            <div className="inline-flex">
              <WrenchIcon className="h-5 inline mr-2" />
              <span>Tools</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CMP_SIDEMENU;
