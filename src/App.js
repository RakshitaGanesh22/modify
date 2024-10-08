import './App.css';
import Card from "./components/Card/Card.jsx";
import NavAndHead from "./components/NavandHead/NavandHead.jsx";
import SearchBar from "./components/Searchwind/Searchwind.jsx";
import Specialization from "./components/Specialization/specialization.jsx";
import MSpeciaist from "./components/Mspecialist/Mspecialist.jsx";
import PatientCAring from "./components/PatientCaring/patientCaring.jsx";
import BlogsAndNews from "./components/BlogandNews/BlogandNews.jsx";
import Family from "./components/Family/Family.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import DownloadApp from "./components/DownloadApp/DownloadApp.jsx";
import Footer from './components/Footer/Footer.jsx';
function App() {
  return (
    <div className="App">
      <NavAndHead />
      <SearchBar/>
      <Card />
      <Specialization />
      <MSpeciaist />
      <PatientCAring />
      <BlogsAndNews />
      <Family />
      <FAQ />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
