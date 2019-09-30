import React, { useMemo }    from 'react'
import PropTypes             from 'prop-types'
import { useSelector }       from 'react-redux'
import { isSameDay, format } from 'date-fns'

import { MiniReminder } from './components'

const LIMIT = 4

const RemindersList = props => {
  const {day} = props
  const reminders = useSelector(({reminders}) => reminders)

  const remindersInThisDay = useMemo(
    () => reminders.filter(reminder => isSameDay(day, reminder.date))
                   .sort((a, b) => format(a.hour, 't') - format(b.hour, 't')),
    [day, reminders],
  )

  return (
    <div>
      {
        remindersInThisDay
          .slice(0, LIMIT)
          .map((reminder) => (
            <MiniReminder
              key={ reminder.id }
              { ...reminder } />
          ))
      }{
      console.log({remindersInThisDay})
    }
      { remindersInThisDay.length > LIMIT && (
        <p>...</p>
      ) }
    </div>
  )
}

RemindersList.propTypes = {}

export default RemindersList
