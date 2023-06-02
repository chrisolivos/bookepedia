import './App.css';
import { useNavigate } from 'react-router-dom'


function App() {
  const navegar = useNavigate();
  function GoDashboard() {
    navegar('/dashboard')
  }
  return (

    <div className="App">
      <div className='container-welcome'>
        <div className='div-welcome'>
          <p className='style-text'>"I do believe something
            very magical can happend<br /> when you read a good book"
            <br />
            J. K.  Rowling

          </p>
          <p>
            <button className='style-button' onClick={GoDashboard}>Start</button>
          </p>
        </div>
      </div>
    </div>

  );
}

export default App;
