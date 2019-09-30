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
          <div className="month-title row">
            <button onClick={ () => previousMonth() }>Previous</button>
            { getPrettyMonthTitle(date) }
            <button onClick={ () => nextMonth() }>Next</button>
          </div>
          <div>
            { weekDays.map(day => <span key={ day }>{ day }</span>) }
          </div>
        </header>
        <div>
          { weeks.map(week => <Week key={ week } date={ week } />) }
        </div>
      </section>
      <AddReminderButton />
    </div>
  )
}

Calendar.propTypes = {}

export default Calendar
