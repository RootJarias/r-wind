// Base Imports
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div>About</div>
      <Link to="/">
        <button className="bg-blue-500 shadow-lg p-3 text-white">
          Go to Home
        </button>
      </Link>
    </>
  );
};

export default About;
