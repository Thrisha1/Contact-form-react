import { useState,useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Addcontact from './components/Addcontact'
import Contact from './components/Contact'

function App() {
  const [contacts, setContacts] = useState([
    {
      "name":"thrisha",
      "email":"thrisha@gmail.com" 
    }
  ]);
  
  const adder = (name,email) => {
    console.log(name,email)
    setContacts([...contacts,{name:name,email:email}])

  }
  
  return (
    <div className="App">
        <Header/>
        <Addcontact adder={adder}/>
        <Contact ar={contacts}/>
    </div>
  )
}

export default App;
