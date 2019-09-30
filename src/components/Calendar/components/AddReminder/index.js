import React, { useState, useCallback }                from 'react'
import PropTypes                                       from 'prop-types'
import { format, parseISO, getYear, getMonth, getDay } from 'date-fns'

import { useFormInput, useTimeInput } from '../../../../hooks'
import { now }                        from '../../../../utils'

const defaultHour = '12:00'
const defaultHourArray = defaultHour.split(':')

const AddReminder = props => {
  const {addReminder} = props
  const [on, toggle] = useState(false)

  const text = useFormInput('Reminder')
  const city = useFormInput('Rubio, Táchira')
  const date = useFormInput(format(now, 'yyyy-MM-dd').toString())
  const {valueAsDate, ...hour} = useTimeInput(defaultHour)
  const color = useFormInput('#000000')

  console.log({valueAsDate})

  const onSubmit = useCallback(() => {
      if (date.value && text.value) {
        const dateValue = parseISO(date.value)
        const hourValue = hour.value === defaultHour
          ? new Date(
            getYear(dateValue),
            getMonth(dateValue),
            getDay(dateValue),
            Number(defaultHourArray[0]),
            Number(defaultHourArray[1]),
          )
          : valueAsDate

        addReminder({
          text: text.value,
          city: city.value,
          date: dateValue,
          hour: hourValue,
          color: color.value,
        })
      }
    },
    [
      addReminder,
      city.value,
      color.value,
      date.value,
      hour.value,
      text.value,
      valueAsDate,
    ])

  return (
    <>
      <button onClick={ () => toggle(on => !on) }>+</button>
      {
        on && (
          <div>
            <input type="text" maxLength={ 30 } { ...text } />
            <input type="city" { ...city } />
            <input type="date" { ...date } />
            <input type="time" { ...hour } />
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
