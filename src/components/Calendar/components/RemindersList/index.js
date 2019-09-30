import React, { useMemo }    from 'react'
import PropTypes             from 'prop-types'
import { useSelector }       from 'react-redux'
import { isSameDay, format } from 'date-fns'

import { Reminder } from './components'

const LIMIT = 5

const RemindersList = props => {
  const {day} = props
  const reminders = useSelector(({reminders}) => reminders)

  const remindersInThisDay = useMemo(
    () => reminders.filter(reminder => isSameDay(day, reminder.date))
                   .sort((a, b) => format(a.hour, 't') - format(b.hour, 't'))
                   .slice(0, LIMIT),
    [day, reminders],
  )

  return (
    <div>
      {
        remindersInThisDay.map((reminder, i) => (
          <Reminder
            key={ JSON.stringify({
              ...reminder,
              i,
            }) }
            { ...reminder } />
        ))
      }
      { remindersInThisDay.length >= LIMIT && (
        <span style={ {
          fontSize: '1rem',
          fontWeight: '600',
          top: '-5px',
        } }>...</span>
      ) }
    </div>
  )
}

RemindersList.propTypes = {}

export default RemindersList
