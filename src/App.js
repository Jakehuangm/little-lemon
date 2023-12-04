
import './App.css';
import Header from './components/Header'; // Ensure the path is correct
import Nav from './components/Nav';       // Ensure the path is correct
import Main from './components/Main';     // Ensure the path is correct
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
