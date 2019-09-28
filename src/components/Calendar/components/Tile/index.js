import React     from 'react'
import PropTypes from 'prop-types'

import RemindersList from '../RemindersList'

const Tile = props => {
  return (
    <div>
      <RemindersList />
    </div>
  )
}

Tile.propTypes = {}

export default Tile
