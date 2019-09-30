import React, { useMemo }    from 'react'
import PropTypes             from 'prop-types'
import { useSelector }       from 'react-redux'
import { isSameDay, format } from 'date-fns'

import { MiniReminder } from './components'

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
          <MiniReminder
            key={ reminder.id }
            { ...reminder } />
        ))
      }
      { remindersInThisDay.length >= LIMIT && (
        <p>...</p>
      ) }
    </div>
  )
}

RemindersList.propTypes = {}

export default RemindersList
