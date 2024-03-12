import './App.css';
import UseContext from './components/UseContext';
import UseEffect from './components/UseEffect';
import UseState from './components/UseState';
import { createContext,useState } from 'react';

function App() {
  const [user, setuser] = useState("jasmita")
  const UserContext= createContext()
  return (
    <UserContext.Provider value={user}>
    
    <div className="App">
     {` Things i did for preparing for exam by ${user}`}
    </div>
    <UseState/>
    <UseEffect/>
    <UseContext name="jas"/>
    
    
    </UserContext.Provider>
  );
}

export default App;
