import React     from 'react'
import PropTypes from 'prop-types'

import { getDayNumber } from '../../../../utils'
import RemindersList    from '../RemindersList'

const Day = props => {
  const {date, isToday, isCurrentMonth} = props

  console.log({isToday, isCurrentMonth})

  return (
    <div>
      { getDayNumber(date) }
      <p>{ isToday && 'TODAY!' }</p>
      <p>{ isCurrentMonth && 'Current month!' }</p>
      <RemindersList date={ date } />
    </div>
  )
}

Day.propTypes = {}

export default Day
