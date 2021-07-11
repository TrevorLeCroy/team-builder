import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import TeamForm from './TeamForm';

const baseMembers = [
  {
    'name'    : 'Danny',
    'id'      : 0,
    'role'    : 'Back End Developer',
    'location': 'Salt Lake City US',
    'email'   : 'danny@email.com'
  },
  {
    'name'    : 'Corbin',
    'id'      : 1,
    'role'    : 'Full Stack Developer',
    'location': 'Atlanta US',
    'email'   : 'corbin@email.com'
  }
]

function App() {
  const [team, setTeam]           = useState(baseMembers);
  const defaultNewMember          = {'name': '', 'id': team.length+1, 'location':"", 'email':""};
  const [newMember, setNewMember] = useState(defaultNewMember);

  
  const inputHandler = event => {
    const member = {
      ...newMember,
      'email': `${newMember.name.toLowerCase()}@email.com`,
      [event.target.name]: event.target.value
    }
    setNewMember(member);
  }

  const submitHandler = event => {
    event.preventDefault();
    setTeam([...team, newMember]);
  }

  return (
    <div className='form-holder'>
    <TeamForm newMember={newMember} inputHandler={inputHandler} submitHandler={submitHandler}/>
      <div className='member-list'>
        {team.map(member => {
          return (
            <div className='member-card' key={member.id}>
              <h2> {member.name} the {member.role} </h2>
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
