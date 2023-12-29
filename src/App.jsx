import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Header from './component/Header';
import FeedBackfrom from './component/FeedBackfrom';
import FeedbackList from './component/FeedbackList';
import FeedBackStat from './component/FeedBackStat';
import feedbackdata from './data/data';
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
    <>
      <Header />
      <div className="container">
        <FeedBackfrom handleAdd={addFeedback} />
        <FeedBackStat feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};
export default App;
