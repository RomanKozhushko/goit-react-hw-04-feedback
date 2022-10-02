import React from 'react';
import PropTypes from 'prop-types';
import Feedback from "components/feedBack/FeedbackOptions";
import Statistics from "components/statistic/Statistics"
import Notification from './notification/Notification';
import { SectionBox } from './section/sectionRender.styled';
import{ Apca, ApcaName } from './App.styled'

  export class App extends React.Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    }

  onLeaveFeedback = stateName => {
    this.setState(prevState => {
      const value = prevState[stateName];
        return {
          [stateName]: value + 1
         }
       })
     };
   
    render() {
      const { good, neutral, bad, } = this.state;
      const total = good + neutral + bad;
      const options = Object.keys(this.state);
      return (  
        <Apca>
          <SectionBox title="Please leave feedback">
            <ApcaName>Please leave feedback</ApcaName>
            <Feedback
              options={options}
              onLeaveFeedback={this.onLeaveFeedback}
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
}
    
App.propTypes = {
    Good : PropTypes.number,
    Neutral :PropTypes.number,
    Bad: PropTypes.number,
    Total: PropTypes.number,
    PositiveFeedback: PropTypes.number,
}


  