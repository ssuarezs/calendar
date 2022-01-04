import Calendar from './Calendar'

const events = [
  { d: 4, m: 12, y: 2021, event: 'Event 1' },
  { d:16, m: 12, y: 2021, event: 'Event 1' }
]
const calendarStyles = {
  box: {
  }
}
const App = () => {
  return (
    <div>
      <Calendar 
        styles={calendarStyles}
        handleDay={(i)=> {console.log('luaoeu',i)}}
        events={events}
      />
    </div>
  );
}

export default App
