import Homepage from "./pages/HomePage/Homepage";
import BlogPage from "./pages/BlogPage/BlogPage";
import RepoPage from "./pages/ReposPage/RepoPage";
import Contactpage from "./pages/ContactPage/Contactpage";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
import Timeline from "./pages/Timeline/Timeline";
function App() {
  return (
    <div className="App">
     
      <Router>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/blogs">
          <BlogPage />
        </Route>
        <Route path="/repos">
          <RepoPage />
        </Route>
        <Route path="/contact">
          <Contactpage />
        </Route>
        <Route path="/timeline">
          <Timeline />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
