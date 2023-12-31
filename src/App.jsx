import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './component/Header';
// import Card from './component/shared/Card';
import FeedBackfrom from './component/FeedBackfrom';
import FeedbackList from './component/FeedbackList';
import FeedBackStat from './component/FeedBackStat';

import AboutPage from './Pages/AboutPage';
import Post from './component/Post';
import { FeedbackProvider } from './context/FeedbackContext';
// import AboutIcon from './component/AboutIcon';
import './App.css';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackfrom />
                  <FeedBackStat />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/*" element={<Post />} />
          </Routes>
          {/* <AboutIcon /> */}
        </div>
      </Router>
    </FeedbackProvider>
  );
};
export default App;

//card is 4 lecture in 5 file
