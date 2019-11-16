import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './App.css';

function App() {
  
  const [users, setUser] = useState([]);
  
  useEffect(
    () => {
      async function fetchData() {
        setUser(
          await fetch('https://reqres.in/api/users')
            .then(res => res.json())
            .then(res => res.data)
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
          users => {
            <Grid key={users.id} item xs={12} sm={6} md={4} lg={4} xl={3}>
              <PplCard 
                key={users.id} 
                email={users.email} 
                firstname={users.first_name}
                lastname={users.last_name} 
                avatar={users.avatar}
              />
            </Grid>
          }
        )}
      </Grid>
      {users.map(user => user.email)}
    </div>
);
}
export default App;
