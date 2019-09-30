import React     from 'react'
import PropTypes from 'prop-types'

const Reminder = props => {
  const {text, city, date, time, color} = props
  return (
    <div style={ {
      backgroundColor: color,
      borderRadius: '3px',
      marginTop: '2px',
      marginRight: '1px',
      marginLeft: '1px',
    } }>
      <span
        style={ {
          color: 'white',
          fontSize: '.7rem',
          padding: '5px',
        } }
      >
        { text } - { city }
      </span>
    </div>
  )
}

Reminder.propTypes = {}

export default Reminder
