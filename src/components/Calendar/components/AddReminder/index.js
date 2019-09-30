import React, { useMemo, useState, useCallback }       from 'react'
import { createPortal }                                from 'react-dom'
import PropTypes                                       from 'prop-types'
import { format, parseISO, getYear, getMonth, getDay } from 'date-fns'

import { useFormInput, useTimeInput } from '../../../../hooks'
import { useSelector }                from 'react-redux'

const defaultHour = '12:00'
const defaultHourArray = defaultHour.split(':')

const AddReminder = props => {
  const {addReminder} = props
  const selectedDay = useSelector(({calendar}) => calendar.selectedDay)
  const [on, toggle] = useState(false)
  const onToggle = useCallback(() => toggle(on => !on), [])

  const initialDate = useMemo(
    () => format(selectedDay, 'yyyy-MM-dd').toString(),
    [selectedDay],
  )

  const text = useFormInput('Reminder')
  const city = useFormInput('Rubio, Táchira')
  const date = useFormInput(initialDate)
  const {valueAsDate, ...hour} = useTimeInput(defaultHour)
  const color = useFormInput('#A4A4A4')

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
      onToggle()
    },
    [
      addReminder,
      city.value,
      color.value,
      date.value,
      hour.value,
      onToggle,
      text.value,
      valueAsDate,
    ])

  return (
    <>
      <a className="button is-large is-pulled-right"
         onClick={ onToggle }>
        <span className="icon has-text-info is-large">
          <i className="fas fa-2x fa-circle fa-plus" />
        </span>
      </a>
      {
        on && createPortal(
          <div className={ `modal ${ on && 'is-active' }` }>
            <div className="modal-background" />
            <div className="modal-content">
              <div className="notification">

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Reminder</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="text"
                               maxLength={ 30 } { ...text } />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">City</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="city" { ...city } />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Date</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="date" { ...date } />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Hour</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="time" { ...hour } />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label">Color</label>
                  </div>
                  <div className="field-body is-narrow">
                    <div className="field">
                      <div className="control">
                        <input className="input" type="color" { ...color } />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-grouped is-grouped-right">
                  <div className="control">
                    <button onClick={ onSubmit }
                            className="button is-link">Add
                    </button>
                  </div>
                  <div className="control">
                    <button onClick={ onToggle }
                            className="button is-text">Cancel
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>,
          document.getElementById('modal-root'),
        )
      }
    </>
  )
}

AddReminder.propTypes = {}

export default AddReminder
