import React     from 'react'
import PropTypes from 'prop-types'

const MiniReminder = props => {
  const {text, city, date, hour, color} = props

  const title = `${ text } - ${ city }`

  return (
    <div className="tag" style={ {
      backgroundColor: color,
    } }>
      <span
        style={ {
          color: 'white',
          fontSize: '.8rem',
          padding: '0 5px',
        } }
      >
        { title.length > 18 ? `${ title.substring(0, 18) }...` : title }
      </span>
    </div>
  )
}

MiniReminder.propTypes = {}

export default MiniReminder
