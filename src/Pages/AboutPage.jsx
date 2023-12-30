import Card from '../component/shared/Card';
import { Link } from 'react-router-dom';
const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1 style={{ color: 'black' }}>About This Project </h1>
        <p>
          This is a Raect App to leave feedback app for a product or service
        </p>
        <p>version :1.0.0</p>
        <Link to="/">Back To Home</Link>
      </div>
    </Card>
  );
};

export default AboutPage;
