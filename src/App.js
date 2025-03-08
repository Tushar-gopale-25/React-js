import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
        <Navbar title="Tushar" aboutText="About Tushar" />  
        <div className="container my-4">
            <TextForm heading="Enter the text to analyze below" />
        </div>
        
    </>
  );
}

export default App;
 