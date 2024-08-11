import './App.css';
import Card from "./components/Card/Card.jsx";
import NavAndHead from "./components/NavandHead/NavandHead.jsx";
import SearchBar from "./components/Searchwind/Searchwind.jsx";
import Specialization from "./components/Specialization/specialization.jsx";
import MSpeciaist from "./components/Mspecialist/Mspecialist.jsx";
function App() {
  return (
    <div className="App">
      <NavAndHead />
      <SearchBar/>
      <Card />
      <Specialization />
      <MSpeciaist />
    </div>
  );
}

export default App;
