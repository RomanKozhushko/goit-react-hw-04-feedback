import React from 'react';
import PropTypes from 'prop-types'
import { Button, FeedBackBox } from './FeedbackOptions.styled'


const Feedback = ({onLeaveFeedback}) => {
    return (
        <FeedBackBox>
            <Button type='button' onClick={() => onLeaveFeedback('good')}>
                Good
            </Button>
            <Button type='button' onClick={() => onLeaveFeedback('neutral')}>
                Neutral
            </Button>
            <Button type='button' onClick={() => onLeaveFeedback('bad')}>
                Bad
            </Button>
        </FeedBackBox>);
};

Feedback.propTypes = {
    onClick: PropTypes.func,
}
 export default Feedback