import React     from 'react'
import PropTypes from 'prop-types'

const Reminder = props => {
  const {text, city, date, time, color} = props

  const title = `${ text } - ${ city }`

  return (
    <div style={ {
      backgroundColor: color,
      borderRadius: '3px',
      marginTop: '2px',
      marginRight: '2px',
      marginLeft: '2px',
    } }>
      <span
        style={ {
          color: 'white',
          fontSize: '.7rem',
          padding: '5px',
        } }
      >
        { title.length > 18 ? `${ title.substring(0, 18) }...` : title }
      </span>
    </div>
  )
}

Reminder.propTypes = {}

export default Reminder
