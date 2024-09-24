import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListGuests from "./components/ListGuests";
import Header from "./components/Header";
import AddGuest from "./components/AddGuest";
import Drug from './components/Drug';
import TKI from './components/TKI';
import OASIS from './components/OASIS';

function App() {
  return (
    <div>
        <Router>
            <Header />
                <Routes>
                    <Route path = "/" element={<ListGuests />}></Route>
                    <Route path = "/waitlist" element={<ListGuests />}></Route>
                    <Route path = "/add-guest" element={<AddGuest />}></Route>
                    <Route path = "/edit-guest/:id" element={<AddGuest />}></Route>
                    <Route path = "/drug" element={<Drug />}></Route>
                    <Route path = "/tki" element={<TKI />}></Route>
                    <Route path = "/oasis" element={<OASIS />}></Route>
                </Routes>
        </Router>
    </div>
  );
}

export default App;