import React           from 'react';
import PropTypes       from 'prop-types';
import { useSelector } from 'react-redux';

import { MiniReminder }      from './components';
import { getRemindersByDay } from '../../../../utils';

const LIMIT = 4;

const RemindersList = (props) => {
  const { day } = props;
  const remindersInThisDay = useSelector(({ reminders }) => getRemindersByDay(reminders, day));

  return (
    <div>
      {
        remindersInThisDay
          .slice(0, LIMIT)
          .map((reminder) => (
            <MiniReminder
              key={reminder.id}
              {...reminder}
            />
          ))
      }
      {remindersInThisDay.length > LIMIT && (
        <p>...</p>
      )}
    </div>
  );
};

RemindersList.propTypes = {
  day: PropTypes.shape({}).isRequired,
};

export default RemindersList;
