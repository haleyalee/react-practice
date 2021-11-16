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
import KanbanInstructions from "./Kanban/KanbanInstructions";
import Kanban from "./Kanban/Kanban";
import FlashCardInstructions from "./FlashCard/FlashCardInstructions";
import FlashCard from "./FlashCard/FlashCard";

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
          <li><Link to="/kanban">Kanban</Link></li>
          <li><Link to="/flashcard">Flash Card</Link></li>
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
        <Route
          exact path="/kanban"
          element={<Problem name={'Kanban'} instructions={<KanbanInstructions/>} implementation={<Kanban/>} />}
        />
        <Route
          exact path="/flashcard"
          element={<Problem name={'Flash Card'} instructions={<FlashCardInstructions/>} implementation={<FlashCard/>} />}
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
