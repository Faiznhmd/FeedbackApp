import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

const FeedBackfrom = ({ handleAdd }) => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtndisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  const handleTextchange = (e) => {
    if (text === '') {
      setBtndisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be atleast 10 charcters');
      setBtndisabled(true);
    } else {
      setMessage(null);
      setBtndisabled(false);
    }
    setText(e.target.value);
  };

  //handlesubmit
  const handleSubmit = (e) => {
    e.preventDefault(); //for submiting the actual file e.preventdefault
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      // console.log(newFeedback);
      handleAdd(newFeedback);
      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How Wouold you Rate Your service With Us ?</h2>
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
