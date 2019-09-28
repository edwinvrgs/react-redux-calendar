import React     from 'react'
import PropTypes from 'prop-types'

const Header = props => {
  const {viewType, setViewType} = props

  return (
    <div>
      { viewType }
      <button onClick={ () => setViewType('monthly') }>Monthly</button>
      <button onClick={ () => setViewType('yearly') }>Yearly</button>
    </div>
  )
}

Header.propTypes = {}

export default Header
