import {
  getDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  eachWeekOfInterval,
  format as formatFn,
} from 'date-fns'

export const now = new Date()

export const getDayNumber = (date = now) => {
  return formatFn(date, 'd')
}

export const getDays = (date = now) => {
  return eachDayOfInterval(
    {start: startOfWeek(date), end: endOfWeek(date)})
}

export const getWeeks = (date = now) => {
  return eachWeekOfInterval({start: startOfMonth(date), end: endOfMonth(date)})
}

export const getWeekDays = (date = now, format = 'EEE') => {
  const arr = eachDayOfInterval(
    {start: startOfWeek(date), end: endOfWeek(date)})
  return arr.reduce((accum, day) => [...accum, formatFn(day, format)], [])
}

export const getPrettyMonthTitle = (date = now) => {
  return `${ formatFn(date, 'LLLL') } ${ formatFn(date, 'yyyy') }`
}
