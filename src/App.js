import './App.css';
import Header from './Components/Header'
import Greet from './Components/Greet'
import Card from './Components/Card'
import List from './Components/List'

function App() {
  const DevLang = List.map(lang => <Card name={lang}/>)
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="Container">
          <Greet/>
          {DevLang}
      </div>
    </div>
  );
}

export default App;
