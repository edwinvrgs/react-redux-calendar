import React, { useMemo } from 'react'
import PropTypes          from 'prop-types'
import { useSelector }    from 'react-redux'
import { isSameDay }      from 'date-fns'

import { Reminder } from './components'

const LIMIT = 5

const RemindersList = props => {
  const {day} = props
  const reminders = useSelector(({reminders}) => reminders)

  const remindersInThisDay = useMemo(
    () => reminders.filter(reminder => isSameDay(day, reminder.date))
                   .slice(0, LIMIT),
    [day, reminders],
  )

  return (
    <div>
      {
        remindersInThisDay.map(reminder => (
          <Reminder key={ JSON.stringify(reminder) } { ...reminder } />
        ))
      }
      { remindersInThisDay.length >= LIMIT && (
        <span>...</span>
      ) }
    </div>
  )
}

RemindersList.propTypes = {}

export default RemindersList
