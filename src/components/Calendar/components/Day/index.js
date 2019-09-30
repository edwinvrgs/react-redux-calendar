import React, { useState, useMemo, useCallback } from 'react'
import { createPortal }                          from 'react-dom'
import PropTypes                                 from 'prop-types'
import { useSelector }                           from 'react-redux'
import { format, isSameDay }                     from 'date-fns'

import { getDayNumber }    from '../../../../utils'
import { useActions }      from '../../../../hooks'
import { calendarActions } from '../../../../state/ducks/calendar'

import Reminder             from '../Reminder'
import RemindersList        from '../RemindersList'
import { remindersActions } from '../../../../state/ducks/reminders'

const Day = props => {
  const {day, isSelected, isToday, isCurrentMonth} = props
  const reminders = useSelector(({reminders}) => reminders)
  const {removeAllReminders} = useActions(remindersActions)
  const {selectDay} = useActions(calendarActions)
  const [on, toggle] = useState(false)

  const remindersInThisDay = useMemo(
    () => reminders.filter(reminder => isSameDay(day, reminder.date))
                   .sort((a, b) => format(a.hour, 't') - format(b.hour, 't')),
    [day, reminders],
  )

  const onToggle = useCallback(() => toggle(on => !on), [])

  const onClick = useCallback(() => {
    selectDay(day)
    onToggle()
  }, [day, onToggle, selectDay])

  return (
    <>
      {
        remindersInThisDay.length !== 0 &&
        createPortal(
          <div className={ `modal ${ on && 'is-active' }` }>
            <div className="modal-background" onClick={ onToggle } />
            <div className="modal-content">
              <div className="notification">
                {
                  remindersInThisDay.map(reminder => (
                    <Reminder key={ reminder.id } { ...reminder } />
                  ))
                }
                <button className="button is-warning"
                        onClick={ () => removeAllReminders(day) }>
                  Remove all
                </button>
              </div>
            </div>
          </div>,
          document.getElementById('modal-root'),
        )
      }
      <div
        className=""
        style={ {
          flex: 1,
          height: '150px',
          borderLeft: 'solid 1px #EFEFEF',
          cursor: 'pointer',
          transition: 'all .2s',
          color: isCurrentMonth ? 'black' : 'grey',
          backgroundColor: isToday
            ? 'lightblue'
            : isSelected
              ? 'lightgrey'
              : '',
        } }
        onClick={ onClick }
      >
        <div className="columns">
          <div className="column is-2">
            <div style={ {
              fontSize: '1rem',
              alignSelf: 'flex-start',
              padding: '8px 0 0 8px',
            } }>
              { getDayNumber(day) }
            </div>
          </div>
          <div className="column">
            <RemindersList day={ day } />
          </div>
        </div>
      </div>
    </>
  )
}

Day.propTypes = {}

export default Day
