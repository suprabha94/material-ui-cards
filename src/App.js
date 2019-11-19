import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';

import './App.css';

import PplCard from './components/ppl-card.js';

function App() {
  
  const [users, setUser] = useState([]);
  
  useEffect(
    () => {
      async function fetchData() {
        setUser(
          await fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log(err, 'error...'))
        )
      }
      fetchData()
    }, []
  )
  
    return (
    <div className="App">
      <h3>RESPONSIVE GRID HOOKS</h3>
      <Grid container spacing={10} style={{padding: '24px'}}>
        {users.map(
          user => { return (
            <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <PplCard 
                key={user.id} 
                email={user.email} 
                firstname={user.first_name}
                lastname={user.last_name} 
                avatar={user.avatar}
              />
            </Grid>
            )
          }
        )}
      </Grid>
    </div>
);
}
export default App;
