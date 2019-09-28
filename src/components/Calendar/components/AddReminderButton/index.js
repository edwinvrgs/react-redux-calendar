import React from 'react'
import PropTypes from 'prop-types'

const AddReminderButton = props => {
  return (
    <div>
      <button onClick={ () => console.log('Reminder added') }>Add Reminder
      </button>
    </div>
  )
}

AddReminderButton.propTypes = {}

export default AddReminderButton
