const FeedBackStat = ({ feedback }) => {
  // cal rating//
  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;
  // for double digit rating
  average = average.toFixed(1);
  return (
    <div className="feedback-stats">
      <h4>{feedback.length}:Reviews</h4>
      <h4>Aveage Rating:{average}</h4>
    </div>
  );
};

export default FeedBackStat;
