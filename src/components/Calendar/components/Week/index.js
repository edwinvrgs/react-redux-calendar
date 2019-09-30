import React, { useMemo }         from 'react'
import PropTypes                  from 'prop-types'
import { isSameMonth, isSameDay } from 'date-fns'

import Day              from '../Day'
import { getDays, now } from '../../../../utils'

const Week = props => {
  const {date, week} = props

  const days = useMemo(() => getDays(week), [week])

  return (
    <div style={ {
      display: 'flex',
      flexDirection: 'row',
    } }>
      { days.map(day => (
        <Day
          key={ day }
          day={ day }
          date={ date }
          isToday={ isSameDay(day, now) }
          isCurrentMonth={ isSameMonth(day, date) }
        />
      )) }
    </div>
  )
}

Week.propTypes = {}

export default Week
