import React     from 'react'
import PropTypes from 'prop-types'

import { getDayNumber } from '../../../../utils'
import RemindersList    from '../RemindersList'

const Day = props => {
  const {day, isToday, isCurrentMonth} = props

  return (
    <div>
      { getDayNumber(day) }
      <p>{ isToday && 'TODAY!' }</p>
      <p>{ isCurrentMonth && 'Current month!' }</p>
      <RemindersList day={ day } />
    </div>
  )
}

Day.propTypes = {}

export default Day
