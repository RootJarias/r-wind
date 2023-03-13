import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/about">
        <button className="bg-blue-500 shadow-lg p-3 text-white">
          Go to about
        </button>
      </Link>
    </>
  );
};

export default Home;
