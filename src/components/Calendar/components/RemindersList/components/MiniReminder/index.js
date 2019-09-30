import React from 'react';

const MiniReminder = (props) => {
  const { text, city, date, hour, color } = props;

  const title = `${text} - ${city}`;

  return (
    <div
      style={{
        backgroundColor: color,
        borderRadius: '5px',
        margin: '2px 2px',
      }}
    >
      <span
        style={{
          color: 'white',
          fontSize: '.8rem',
          padding: '0 5px',
        }}
      >
        {title.length > 16 ? `${title.substring(0, 16)}...` : title}
      </span>
    </div>
  );
};

MiniReminder.propTypes = {};

export default MiniReminder;
