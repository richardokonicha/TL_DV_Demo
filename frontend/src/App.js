import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Videos from './videos';
import Video from './video';


export default function App() {

  return (
    <Router>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/vide">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route exact path="/:id" element={<Video/>}/>
          <Route exact path="/" element={<Videos/>}/>
        </Routes>
    </Router>
  );
}


