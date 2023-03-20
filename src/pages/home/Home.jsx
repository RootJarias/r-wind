// Base Imports
import { Link } from 'react-router-dom';

// Import Style
import './_this.css';

const Home = () => {
  return (
    <>
      <div>Home</div>
      <Link to="/about">
        <button className="bg-blue-500 shadow-lg p-3 text-white md:(bg-red-500 text-white)">
          Go to about
        </button>
      </Link>
      <p className="bg-primary-100">asd</p>
      <p className="bg-primary-200">asd</p>
      <p className="bg-primary-300">asd</p>
      <p className="bg-primary-400">asd</p>
      <p className="bg-primary-500">asd</p>
      <p className="bg-primary-600">asd</p>
      <p className="bg-primary-700">asd</p>
      <p className="bg-primary-800">asd</p>
      <p className="bg-primary-900">asd</p>
    </>
  );
};

export default Home;
