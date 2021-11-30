import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Videos from './videos';
import Video from './video';
import Nav from './navigation';


export default function App() {

  return (

    <Router>
        <Nav/>
        <Routes>
          <Route exact path="/:id" element={<Video/>}/>
          <Route exact path="/" element={<Videos/>}/>
        </Routes>
    </Router>
  );
}


