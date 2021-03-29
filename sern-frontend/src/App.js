import './App.css';
import Frontpage from "./page/Frontpage.js";
import ShowAllExercises from "./page/ShowAllExercises.js";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path ="/" component={Frontpage}/>
      <Route exact path ="/seeExercise" component={ShowAllExercises}/>
    </Router>
  );
}

export default App;
