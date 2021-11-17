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
import DropdownInstructions from './Dropdown/DropdownInstructions';
import Dropdown from "./Dropdown/Dropdown";
import AccordionInstructions from './Accordion/AccordionInstructions';
import Accordion from "./Accordion/Accordion";
import TicTacToeInstructions from './TicTacToe/TicTacToeInstructions';
import TicTacToe from "./TicTacToe/TicTacToe";

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
          <li><Link to="/dropdown">Dropdown</Link></li>
          <li><Link to="/accordion">Accordion</Link></li>
          <li><Link to="/tictactoe">TicTacToe</Link></li>
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
        <Route
          exact path="/dropdown"
          element={<Problem name={'Dropdown'} instructions={<DropdownInstructions/>} implementation={<Dropdown/>} />}
        />
        <Route
          exact path="/accordion"
          element={<Problem name={'Accordion'} instructions={<AccordionInstructions/>} implementation={<Accordion/>} />}
        />
        <Route
          exact path="/tictactoe"
          element={<Problem name={'TicTacToe'} instructions={<TicTacToeInstructions/>} implementation={<TicTacToe/>} />}
        />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
