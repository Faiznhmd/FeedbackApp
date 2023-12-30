import { FaQuestion } from 'react-icons/Fa';
import { Link } from 'react-router-dom';
const AboutIcon = () => {
  return (
    <div className="about-link">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIcon;
