import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const schedule = ['tomar banho', 'comer', 'estudar trybe', 'criar site']

function App() {
  return (
    <div>
      {schedule.map((tarefa) => Task(tarefa))}
    </div>
  )
}

export default App;
