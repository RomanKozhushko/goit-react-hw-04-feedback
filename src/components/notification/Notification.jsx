import PropTypes from 'prop-types'
import { NotificationBox } from './Notification.styled'

const Notification = ({ message }) => {
    return (
        <NotificationBox>{message}</NotificationBox>)
}

Notification.propTypes = {
    message: PropTypes.string,
}

export default Notification 