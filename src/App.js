import './App.css';
import Header from './components/Header'; // Ensure the path is correct
import Nav from './components/Nav';       // Ensure the path is correct
import Main from './components/Main';     // Ensure the path is correct
import Footer from './components/Footer';
import BookingPage from './components/BookingPage'; // Adjust path as necessary
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/booking" element={<BookingPage />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;