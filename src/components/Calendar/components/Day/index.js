import React, { useCallback, useState } from 'react';
import { useSelector }                  from 'react-redux';

import Modal                               from '../../../Modal';
import { getDayNumber, getRemindersByDay } from '../../../../utils';
import { useActions }                      from '../../../../hooks';
import { calendarActions }                 from '../../../../state/ducks/calendar';
import { remindersActions }                from '../../../../state/ducks/reminders';

import Reminder      from '../Reminder';
import RemindersList from '../RemindersList';

const Day = (props) => {
  const { day, isSelected, isToday, isCurrentMonth } = props;
  const remindersInThisDay = useSelector(({ reminders }) => getRemindersByDay(reminders, day));

  const { removeAllReminders } = useActions(remindersActions);
  const { selectDay } = useActions(calendarActions);

  const [on, toggle] = useState(false);

  const onToggle = useCallback(() => toggle((on) => !on), []);

  const onClick = useCallback(() => {
    selectDay(day);
    onToggle();
  }, [day, onToggle, selectDay]);

  return (
    <>
      <Modal on={on && remindersInThisDay.length !== 0} toggle={toggle}>
        <div className="notification" style={{ paddingRight: '1.5em' }}>
          {
            remindersInThisDay.map((reminder) => (
              <Reminder key={reminder.id} {...reminder} />
            ))
          }
          <button
            className="button is-warning"
            onClick={() => removeAllReminders(day)}
          >
            Remove all
          </button>
        </div>
      </Modal>
      <div
        className=""
        style={{
          flex: 1,
          height: '150px',
          borderLeft: 'solid 1px #EFEFEF',
          cursor: 'pointer',
          transition: 'all .2s',
          color: isCurrentMonth ? 'black' : 'grey',
          backgroundColor: isToday
            ? 'lightblue'
            : isSelected
              ? 'lightgrey'
              : '',
        }}
        onClick={onClick}
      >
        <div className="columns">
          <div className="column is-2">
            <div style={{
              fontSize: '1rem',
              alignSelf: 'flex-start',
              padding: '8px 0 0 8px',
            }}
            >
              {getDayNumber(day)}
            </div>
          </div>
          <div className="column">
            <RemindersList day={day} />
          </div>
        </div>
      </div>
    </>
  );
};

Day.propTypes = {};

export default Day;
