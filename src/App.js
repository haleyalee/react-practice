import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Problem from './Problem';
import Message from './Message/Message';
import MessageInstructions from './Message/MessageInstructions';
import CounterDashboard from './Counter/CounterDashboard';
import CounterInstructions from "./Counter/CounterInstructions";
import Toggle from "./Toggle/Toggle";
import ToggleInstructions from './Toggle/ToggleInstructions';
import Todo from "./Todo/Todo";
import TodoInstructions from "./Todo/TodoInstructions";

function App() {
  return (
    <BrowserRouter>

      <div style={{padding: '1rem'}}>
        <h3>Simple React Exercises</h3>
        <ul>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/toggle">Toggle</Link></li>
          <li><Link to="/todo">Todo</Link></li>
        </ul>
      </div>

      <Routes>
        <Route 
          exact path="/message" 
          element={<Problem name={'Message'} instructions={<MessageInstructions/>} implementation={<Message />} />} 
        />
        <Route 
          exact path="/counter" 
          element={<Problem name={'Counter'} instructions={<CounterInstructions/>} implementation={<CounterDashboard/>} />} 
        />
        <Route 
          exact path="/toggle" 
          element={<Problem name={'Toggle'} instructions={<ToggleInstructions/>} implementation={<Toggle/>} />} 
        />
        <Route
          exact path="/todo"
          element={<Problem name={'Todo'} instructions={<TodoInstructions/>} implementation={<Todo/>} />} 
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
