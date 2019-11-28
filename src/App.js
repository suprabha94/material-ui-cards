import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';

import './App.css';

import PplCard from './components/ppl-card.js';
import PlaceholderCard from './components/card-placeholder.js';

import FadeIn from "react-fade-in";

function App() {
  
  const [users, setUser] = useState([]);
  const [ready, setReady] = useState(false);
  
  useEffect(
    () => {
      async function fetchData() {
        setUser(
          await fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => {
              setTimeout(() => setReady(true), 4000
                
              );
              
              console.log(ready)
              return res.data
            })
            .catch(err => console.log(err, 'error...'))
        );
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
            <
            <Grid key={user.id} item xs={12} sm={6} md={4} lg={4} xl={3}>

              {ready ? (
                      <FadeIn>
                        <PplCard 
                          key={user.id} 
                          email={user.email} 
                          firstname={user.first_name}
                          lastname={user.last_name} 
                          avatar={user.avatar}
                        />
                      </FadeIn>) :
                      (<PlaceholderCard/>) }
            </Grid>
            )
          }
        )}
      </Grid>
    </div>
);
}
export default App;
