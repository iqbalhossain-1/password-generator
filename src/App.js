import './App.css';
import PassGen from './PassGen';
import Passgenerators from './Passgenerators';

function App() {
  return (
    <div className="App h-screen bg-gradient-to-r from-teal-500 to-blue-600">
      <h1 className='pt-10 text-xl font-bold text-white'>password generator</h1>

      <Passgenerators></Passgenerators>
    </div>
  );
}

export default App;
