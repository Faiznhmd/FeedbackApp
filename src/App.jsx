import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './component/Header';
// import Card from './component/shared/Card';
import FeedBackfrom from './component/FeedBackfrom';
import FeedbackList from './component/FeedbackList';
import FeedBackStat from './component/FeedBackStat';
import feedbackdata from './data/data';
import AboutPage from './Pages/AboutPage';
import Post from './component/Post';
// import AboutIcon from './component/AboutIcon';
import './App.css';

const App = () => {
  const [feedback, setFeedback] = useState(feedbackdata);
  // deletefeedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are You Sure You Want To Delete It?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Addfeedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackfrom handleAdd={addFeedback} />
                <FeedBackStat feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
              </>
            }
          ></Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/*" element={<Post />} />
        </Routes>
        {/* 4<5 */}
        {/* <Card>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </Card> */}
        {/* <AboutIcon /> */}
      </div>
    </Router>
  );
};
export default App;
