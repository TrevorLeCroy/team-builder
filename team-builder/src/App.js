import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TeamForm from './TeamForm';

const baseMembers = [
  {
    'name'    : 'Danny',
    'id'      : '0',
    'location': 'Salt Lake City US',
    'email'   : 'danny@email.com'
  },
  {
    'name'    : 'Corbin',
    'id'      : '1',
    'location': 'Atlanta US',
    'email'   : 'corbin@email.com'
  }
]

function App() {
  const [team, setTeam]           = useState(baseMembers);
  const [newMember, setNewMember] = useState(null);
  
  return (
    <div className='form-holder'>
    <TeamForm/>
      <div className='member-list'>
        {team.map(member => {
          return (
            <div className='member-card'>
              <h2> {member.name} </h2>
              <h3> {member.email} </h3>
              <p> {member.location} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
