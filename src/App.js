import Homepage from "./pages/HomePage/Homepage";
import BlogPage from "./pages/BlogPage/BlogPage";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css'
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
      </Router>
      
    </div>
  );
}

export default App;
