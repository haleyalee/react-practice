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

function App() {
  return (
    <BrowserRouter>

      <div style={{padding: '1rem'}}>
        <h3>Simple React Exercises</h3>
        <ul>
          <li><Link to="/message">Message</Link></li>
          <li><Link to="/counter">Counter</Link></li>
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
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
