import logo from './logo.svg';
import './App.css';
import Left from './Left/Left';
import Right from './Right/Right';
import Baner from './Baner/Baner';

function App() {
  return (
    <>
      <div className="App">
        <Left />
        <Right />
      </div>
      <Baner />
    </>
  );
}

export default App;
