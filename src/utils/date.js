import {
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format as formatFn,
} from 'date-fns'

const now = new Date()

export const getWeekDays = (date = now, format = 'EEE') => {
  const arr = eachDayOfInterval({start: startOfWeek(date), end: endOfWeek(now)})
  return arr.reduce((accum, day) => [...accum, formatFn(day, format)], [])
}

export const getPrettyMonthTitle = (date = now) => {
  return `${ formatFn(date, 'LLLL') } ${ formatFn(date, 'yyyy') }`
}
