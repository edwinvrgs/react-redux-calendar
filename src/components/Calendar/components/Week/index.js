import React, { useMemo }         from 'react'
import PropTypes                  from 'prop-types'
import { isSameMonth, isSameDay } from 'date-fns'

import Day              from '../Day'
import { getDays, now } from '../../../../utils'
import { useSelector }  from 'react-redux'

const Week = props => {
  const {date, week} = props

  const selectedDay = useSelector(({calendar}) => calendar.selectedDay)

  const days = useMemo(() => getDays(week), [week])

  return (
    <div style={ {
      display: 'flex',
      flexDirection: 'row',
      borderTop: 'solid 1px #EFEFEF',
    } }>
      { days.map(day => (
        <Day
          key={ day }
          day={ day }
          date={ date }
          isSelected={ isSameDay(day, selectedDay) }
          isToday={ isSameDay(day, now) }
          isCurrentMonth={ isSameMonth(day, date) }
        />
      )) }
    </div>
  )
}

Week.propTypes = {}

export default Week
