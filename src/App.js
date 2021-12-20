import {useState} from 'react'
import './App.css';
import Profile from './Pages/Profile';
import About from './Pages/About';
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import {AppContext} from './AppContext'

function App() {
  const navigate = useNavigate()
  const [state, setstate] = useState(10)
  const [stateNew, setstateNew] = useState(100)
  console.log(state);;
  return (
    <div className="App">
      <h1>Welcome to react route</h1>
      <button onClick={()=>navigate('/about')}>About</button>
      <button onClick={()=>navigate('/profile')}>Profile</button>
      <AppContext.Provider value={{data:stateNew}}>
      <Routes>
        <Route path='about' element={<About />}/>
        <Route path='profile' element={<Profile ></Profile>} />
       
        
      </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
