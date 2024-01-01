import { useState, useContext, useEffect } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';

const FeedBackfrom = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtndisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeeddback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtndisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextchange = ({ target: { value } }) => {
    if (value === '') {
      setBtndisabled(true);
      setMessage(null);
    } else if (value.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setBtndisabled(true);
    } else {
      setMessage(null);
      setBtndisabled(false);
    }
    setText(value);
  };

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault(); //for submiting the actual file e.preventdefault
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      if (feedbackEdit.edit === true) {
        updateFeeddback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }
      setRating(10);
      setBtndisabled(true);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Would you Rate Your service With Us ?</h2>
        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />
        <div className="input-group">
          <input
            onChange={handleTextchange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackfrom;
