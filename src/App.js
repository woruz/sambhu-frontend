import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.min.css"
import './App.css';
import Navbar from './components/Navbar';
import PracticeArea from './components/PracticeArea';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './screens/signin/Signin';
import Signup from './screens/Signup';
import ProtectedRoutes from './components/ProtectedRoutes';
import MainPage from './screens/MainPage';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored'/>
      <Navbar />
      <div style={{height: "10px", width: "100%", backgroundColor: "black"}}/>
      {/* <PracticeArea /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <ProtectedRoutes path="/mainpage" element={<MainPage />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
