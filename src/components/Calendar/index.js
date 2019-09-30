import React, { useMemo } from 'react';
import { useSelector }    from 'react-redux';

import { useActions }                                 from '../../hooks';
import { getPrettyMonthTitle, getWeekDays, getWeeks } from '../../utils';
import { calendarActions }                            from '../../state/ducks/calendar';
import { remindersActions }                           from '../../state/ducks/reminders';

import { AddReminder, Week } from './components';

const Calendar = () => {
  const date = useSelector(({ calendar }) => calendar.date);
  const { nextMonth, previousMonth } = useActions(calendarActions);
  const { addReminder } = useActions(remindersActions);

  const weekDays = useMemo(() => getWeekDays(), []);
  const weeks = useMemo(() => getWeeks(date), [date]);

  return (
    <>
      <div
        className="container"
        style={{
          display: 'block',
          background: 'white',
          width: '800 px',
          border: 'solid 1px #EFEFEF',
          margin: '10px auto',
          boxShadow: '0 0 15px 0 lightgrey',
          fontSize: '1.3 rem',
        }}
      >
        <section className="calendar">
          <header className="header">
            <div style={{
              display: 'flex',
              fontWeight: '600',
              fontSize: '1.8rem',
              justifyContent: 'space-between',
              textTransform: 'uppercase',
              color: 'white',
              backgroundColor: 'grey',
            }}
            >
              <span
                className="icon is-large"
                style={{ cursor: 'pointer' }}
                onClick={() => previousMonth()}
              >
                <i className="fas fa-arrow-left" />
              </span>
              {getPrettyMonthTitle(date)}
              <span
                className="icon is-large"
                style={{ cursor: 'pointer' }}
                onClick={() => nextMonth()}
              >
                <i className="fas fa-arrow-right" />
              </span>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
              color: 'white',
              backgroundColor: '#2875C7',
              cursor: 'default',
              fontSize: '1.2rem',
              padding: '5px 0',
            }}
            >
              {weekDays.map((day) => (
                <div key={day}>{day}</div>
              ))}
            </div>
          </header>
          <div>
            {weeks.map((week) => (
              <Week key={week} date={date} week={week} />
            ))}
          </div>
        </section>
      </div>
      <div className="container">
        <AddReminder addReminder={addReminder} />
      </div>
    </>
  );
};

Calendar.propTypes = {};

export default Calendar;
