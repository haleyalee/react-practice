import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Message from './Message/Message'
import CounterDashboard from './Counter/CounterDashboard';

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
        <Route exact path="/message" element={<Message />} />
        <Route exact path="/counter" element={<CounterDashboard />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
