React Redux Calendar
--
Basic calendar with Redux for state management.

### Notes
- Latest version of React, using hooks for **everything**.
- Latest version of Redux, using hooks for **everything** (again).
- Unit testing with `jest`.
- Date management with `date-fns` .
- OpenWeatherMap API for obtaining weather info.

### Project structure
- All the components are structured by the following rules:
  - A folder with the component name in *PascalCase*.
  - A `index.js` file with the component code.
  - A *components* folder with all depending components inside (with the same structure).
  - Optionally, all the files required only by that component.
- The state is managed by Redux using the [*re-ducks*](https://github.com/something/re-ducks) pattern for file structure.
  
### Features
 - [x] Add reminder (day, time, city).
 - [x] Color for reminder.
 - [] Weather for reminder.
 - [x] Edit reminder.
 - [x] Remove reminder.
 - [x] Remove all reminders.

### Try it!
[react-redux-calendar on Netlify](https://react-redux-calendar.netlify.com)
