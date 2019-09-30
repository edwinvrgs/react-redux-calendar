import React     from 'react'
import PropTypes from 'prop-types'

import { getDayNumber }    from '../../../../utils'
import RemindersList       from '../RemindersList'
import { useActions }      from '../../../../hooks'
import { calendarActions } from '../../../../state/ducks/calendar'

const Day = props => {
  const {day, isSelected, isToday, isCurrentMonth} = props
  const {selectDay} = useActions(calendarActions)

  return (
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
          ? 'lightgrey'
          : isSelected
            ? 'lightblue'
            : '',
      } }
      onClick={ () => selectDay(day) }
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
  )
}

Day.propTypes = {}

export default Day
