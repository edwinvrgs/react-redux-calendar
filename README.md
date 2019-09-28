React Redux Calendar
--
Basic calendar with Redux for state management

### Project structure
- All the components are structure by the following rules:
  - A folder with the component name in *PascalCase*
  - A `index.js` file with the component code
  - A *components* folder with all depending components inside (with the same structure)
  - Optionally, all the files required only by that component
- The state is managed by Redux using the [*re-ducks*](https://github.com/something/re-ducks) pattern for file structure
  
### Features
 - [] Monthly view
 - [] Yearly view
 - [] Add reminder (day, time, city)
 - [] Color for reminder
 - [] Weather for reminder
 - [] Edit reminder
