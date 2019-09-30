import React, { useMemo }         from 'react'
import PropTypes                  from 'prop-types'
import { isSameMonth, isSameDay } from 'date-fns'

import Day                      from '../Day'
import { getDays, currentDate } from '../../../../utils'

const Week = props => {
  const {date} = props

  const days = useMemo(() => getDays(date), [date])

  return (
    <div style={ {
      display: 'flex',
      flexDirection: 'row',
    } }>
      { days.map(day => (
        <Day
          key={ day }
          date={ day }
          isToday={ isSameDay(day, currentDate) }
          isCurrentMonth={ isSameMonth(day, currentDate) }
        />
      )) }
    </div>
  )
}

Week.propTypes = {}

export default Week
