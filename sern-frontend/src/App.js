import logo from './logo.svg';
import './App.css';
import Frontpage from "./page/Frontpage.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <Frontpage typeOfExercise="run"></Frontpage>
    </div>
  );
}

export default App;
