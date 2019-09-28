import React, { useState, useMemo } from 'react'
import PropTypes                    from 'prop-types'

import { DEFAULT_CALENDAR_VIEW } from '../../config/constants'

import { Header, MonthlyView, YearlyView } from './components'

const Calendar = props => {
  const [viewType, setViewType] = useState(DEFAULT_CALENDAR_VIEW)

  const views = useMemo(() => ({
    monthly: <MonthlyView />,
    yearly: <YearlyView />,
  }), [])

  return (
    <div>
      <Header
        viewType={ viewType }
        setViewType={ setViewType }
      />
      { views[viewType] }
    </div>
  )
}

Calendar.propTypes = {}

export default Calendar
