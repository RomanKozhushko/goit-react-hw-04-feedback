import { useState } from 'react';
import PropTypes from 'prop-types';
import Feedback from "components/feedBack/FeedbackOptions";
import Statistics from "components/statistic/Statistics"
import Notification from './notification/Notification';
import { SectionBox } from './section/sectionRender.styled';
import{ Apca, ApcaName } from './App.styled'


    export const App = () => {
const [good,setGood] = useState(0)
const [neutral,setNeutral] = useState(0)
const [bad,setBad] = useState(0)

const onLeaveFeedback = acc => {
  switch (acc){
    case "good" :
      setGood(prevGood => prevGood + 1)
      break;
    case "neutral" :
      setNeutral(prevNeutral => prevNeutral + 1)
      break;
    case "bad" :
      setBad(prevBad => prevBad + 1)
      break;
    default:
      return
  }
};
 
    const countTotalFeedback = () => {
    return good + neutral + bad
    };
    const total = countTotalFeedback();
    const options = Object.keys({ good, neutral, bad });
  
    return (  
        <Apca>
          <SectionBox title="Please leave feedback">
            <ApcaName>Please leave feedback</ApcaName>
            <Feedback
              options={options}
              onLeaveFeedback={onLeaveFeedback}
            />
          </SectionBox>
          <SectionBox title="Statistics">
            {total > 0 ? (
            <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
              />) : (<Notification message="There is no feedback ;)" />
            )}
          </SectionBox>
        </Apca>
       
        )
    }

    
App.propTypes = {
    Good : PropTypes.number,
    Neutral :PropTypes.number,
    Bad: PropTypes.number,
    Total: PropTypes.number,
    PositiveFeedback: PropTypes.number,
}


  