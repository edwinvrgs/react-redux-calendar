import React, { useState, useCallback } from 'react'
import PropTypes                        from 'prop-types'
import { format, parseISO }             from 'date-fns'

import { useFormInput } from '../../../../hooks'
import { now }          from '../../../../utils'

const AddReminder = props => {
  const {addReminder} = props
  const [on, toggle] = useState(false)

  const text = useFormInput('Reminder')
  const city = useFormInput('Rubio, Táchira')
  const date = useFormInput(now)
  const hour = useFormInput(format(now, 'pppp'))
  const color = useFormInput('black')

  const onSubmit = useCallback(() => {
    if (date.value && text.value) {
      addReminder({
        text: text.value,
        city: city.value,
        date: parseISO(date.value),
        hour: hour.value,
        color: color.value,
      })
    }
  }, [addReminder, city.value, color.value, date, hour.value, text])

  return (
    <>
      <button onClick={ () => toggle(on => !on) }>+</button>
      {
        on && (
          <div>
            <input type="text" maxLength={ 30 } { ...text } />
            <input type="city" { ...city } />
            <input type="date" { ...date } />
            <input type="hour" { ...hour } />
            <input type="color" { ...color } />
            <button onClick={ onSubmit }>Add reminder</button>
          </div>
        )
      }
    </>
  )
}

AddReminder.propTypes = {}

export default AddReminder
