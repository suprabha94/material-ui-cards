import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  
  const [users, setUser] = useState([]);
  
  useEffect(
    () => {
      async function fetchData() {
        setUser(
          await fetch('https://reqres.in/api/users')
            .then(res => res.json)
            .then(res => res.data)
        )
      }
      fetchData()
    }, []
  )
  
    return (
    <div className="App">
      <h3>RESPONSIVE GRID HOOKS</h3>
      {users.map(user => user.email)}
    </div>
);
}
export default App;
