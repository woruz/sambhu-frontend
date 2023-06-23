import './App.css';
import Navbar from './components/Navbar';
import PracticeArea from './components/PracticeArea';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{height: "10px", width: "100%", backgroundColor: "black"}}/>
      <PracticeArea />
    </div>
  );
}

export default App;
