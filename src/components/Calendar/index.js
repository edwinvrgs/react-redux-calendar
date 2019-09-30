import React, { useMemo } from 'react'
import { useSelector }    from 'react-redux'

import { useActions }                                 from '../../hooks'
import { getWeekDays, getPrettyMonthTitle, getWeeks } from '../../utils'
import { calendarActions }                            from '../../state/ducks/calendar'

import { AddReminderButton, Week } from './components'

const Calendar = props => {
  const date = useSelector(({calendar}) => calendar.date)
  const {nextMonth, previousMonth} = useActions(calendarActions)

  const weekDays = useMemo(() => getWeekDays(), [])
  const weeks = useMemo(() => getWeeks(date), [date])

  return (
    <div>
      <section className="calendar">
        <header className="header">
          <div style={ {display: 'flex', justifyContent: 'center'} }>
            <button onClick={ () => previousMonth() }>Previous</button>
            { getPrettyMonthTitle(date) }
            <button onClick={ () => nextMonth() }>Next</button>
          </div>
          <div style={ {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          } }>
            { weekDays.map(day => (
              <div
                style={ {display: 'flex'} }
                key={ day }>{ day }
              </div>
            )) }
          </div>
        </header>
        <div>
          { weeks.map(week => (
            <Week key={ week } date={ date } week={ week } />
          )) }
        </div>
      </section>
      <AddReminderButton />
    </div>
  )
}

Calendar.propTypes = {}

export default Calendar
