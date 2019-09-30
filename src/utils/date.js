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

export const currentDate = new Date()

export const getDayNumber = (date = currentDate) => {
  return formatFn(date, 'd')
}

export const getDays = (date = currentDate) => {
  const days = eachDayOfInterval(
    {start: startOfWeek(date), end: endOfWeek(date)})
  console.log({days})
  return days
}

export const getWeeks = (date = currentDate) => {
  return eachWeekOfInterval({start: startOfMonth(date), end: endOfMonth(date)})
}

export const getWeekDays = (date = currentDate, format = 'EEE') => {
  const arr = eachDayOfInterval(
    {start: startOfWeek(date), end: endOfWeek(date)})
  return arr.reduce((accum, day) => [...accum, formatFn(day, format)], [])
}

export const getPrettyMonthTitle = (date = currentDate) => {
  return `${ formatFn(date, 'LLLL') } ${ formatFn(date, 'yyyy') }`
}
