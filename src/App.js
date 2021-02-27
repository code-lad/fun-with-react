import './App.css';
import Header from './Components/Header'
import Greet from './Components/Greet'
import Message from './Components/Message'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="Container">
          <Greet/>
          < Message / >
      </div>
    </div>
  );
}

export default App;
