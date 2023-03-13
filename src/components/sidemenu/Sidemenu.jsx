import './_this.css';

import IMG_WAVE from '../../assets/general/wave';

const CMP_SIDEMENU = () => {
  return (
    <>
      <div className="block h-screen w-80 bg-gray-100 drop-shadow-md border-r border-slate-300">
        <div className="p-5 text-center text-2xl font-bold">
          <img
            className="block m-auto h-[120px]"
            src={require('../../assets/main-logo.png')}
            alt="main-logo"
          />
          <span>R-Wind</span>
        </div>
        {IMG_WAVE}
      </div>
    </>
  );
};

export default CMP_SIDEMENU;
